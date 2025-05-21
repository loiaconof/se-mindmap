# AWS EC2 Storage

## EBS - Elastic Block Store

- An EBS Volume is a **network drive** that can attached and detached to a instance while they run allowing this instance to **persist data**
- Can only be **mounted to one instance at a time**
- **Limitations**:
  - bound to a **specific AZ**
  - Have a **provisoned capacity**
- **Snapshots**:
  - Recommended to **detach a volume before this operation**
  - Snapshots has **not limitations across AZ or Region**
  - **Features**:
    - **EBS Snapshot Archive**
      - Move a Snapshot to an ”archive tier” that is 75% cheaper
      - Takes within 24 to 72 hours for restoring the archive
    - **Recycle Bin for EBS Snapshots**
      - Setup rules to retain deleted snapshots so you can recover them after an accidental deletion
      - Specify retention (from 1 day to 1 year)
    - **Fast Snapshot Restore (FSR)**
      - Force full initialization of snapshot to have no latency on the first use (high costs)
- **Volume Types**:
  - **SSD**:
    - **General purpose SSD** (gp2, gp3): balances price and performance for a wide variety of workloads
    - **Provisioned IOPS (PIOPS) SSD** (io1, io2): Highest-performance SSD volume for mission-critical low-latency or high-throughput workloads
      - **Use cases**: databases workloads (sensitive to storage perf and consistency)
      - **Multi-Attach Support**:
        - Each instance has full read & write permissions to the high-performance volume
        - **Use cases**:
          - Achieve **higher application availability** in clustered Linux applications (ex: Teradata)
          - Applications must manage concurrent write operations
        - Up to 16 EC2 Instances at a time
        - Must use a file system that’s cluster-aware (not XFS, EXT4, etc…)
  - **HDD**
    - **Throughput Optimized HDD** (st1): Low cost HDD volume designed for frequently accessed, throughput- intensive workloads
      - **Use cases**: Big Data, Data Warehouses, Log Processing
    - **Cold HDD** (sc1): Lowest cost HDD volume designed for less frequently accessed workloads
      - **Use cases**: Scenarios where lowest cost is important
- **Encryption**
  - An encrypted EBS volume has the following **characteristics**:
    - Data at rest is encrypted inside the volume
    - All the data in flight moving between the instance and the volume is encrypted
    - All snapshots are encrypted
    - All volumes created from the snapshot
  - Encryption has a minimal impact on latency
  - EBS Encryption leverages keys from KMS (AES-256)

::: details EBS Volume Types summary

| Name       | Type | Max IOPS | Max Throughput | Volume Size Range | Durability |
|------------|------|----------|----------------|-------------------|------------|
| `gp3`      | SSD  | 16,000   | 1,000 MiB/s    | 1 GiB – 16 TiB    | 99.8%      |
| `gp2`      | SSD  | 16,000   | 250 MiB/s      | 1 GiB – 16 TiB    | 99.8%      |
| `io2`      | SSD  | 64,000   | 1,000 MiB/s    | 4 GiB – 16 TiB    | 99.999%    |
| `io1`      | SSD  | 64,000   | 1,000 MiB/s    | 4 GiB – 16 TiB    | 99.8%      |
| `st1`      | HDD  | 500      | 500 MiB/s      | 125 GiB – 16 TiB  | 99.8%      |
| `sc1`      | HDD  | 250      | 250 MiB/s      | 125 GiB – 16 TiB  | 99.8%      |
:::

## EFS - Elastic File System

- **NFS file system** that allows multiple EC2 instances to access the same shared file system concurrently
- **Configuration**:
  - **Performance Modes** (set at EFS creation time):
    - **General Purpose (default)**: latency-sensitive use cases (web server, CMS, etc…)
    - **Max I/O**: higher latency, throughput, highly parallel (big data, media processing)
  - **Throughput Modes**:
    - **Bursting**: 1 TB = 50MiB/s + burst of up to 100MiB/s
    - **Provisioned**: set your throughput regardless of storage size, ex: 1 GiB/s for 1 TB storage
    - **Elastic**: automatically scales throughput up or down based on your workloads
      - Up to 3GiB/s for reads and 1GiB/s for writes
      - Used for unpredictable workloads
- **Storage Classes**:
  - **Storage Tiers**:
    - **Standard**: for frequently accessed files
    - **Infrequent access (EFS-IA)**: cost to retrieve files, lower price to store.
    - **Archive**: rarely accessed data (few times each year), 50% cheaper
  - **Availability and durability**:
    - **Standard**: Multi-AZ, great for prod
    - **One Zone**: One AZ, great for dev, backup enabled by default, compatible with IA (EFS One Zone-IA)
  - **Features**:
    - **Lifecycle Policies**: allows to move files between storage tiers for cost savings
- **Use cases**:
  - Content management and web serving
  - Big data and analytics workloads
  - Development environments and CI/CD pipelines
- Uses:
  - **NFSv4.1 protocol**
  - **Security group** to control access to EFS
- **Encryption at rest** using KMS
- File system **scales automatically**, **pay-per-use**
- **Limitations**:
  - **Not compatible with Windows based AMI**

## EBS vs EFS vs Instance Store

- **EBS**: Best for **single-instance storage** with **low latency** and **persistent block storage** needs (e.g., databases, root volumes).
- **EFS**: Best for **multiple-instance** access with **scalable file storage** and **high availability** (e.g., shared configs, logs, web content).
- **Instance Store**: Best for **temporary high-speed local storage** (e.g., buffers, scratch data, caches) where data loss is acceptable.

::: details Comparison Table
| Feature                          | EBS (Elastic Block Store)                         | EFS (Elastic File System)                           | Instance Store                                      |
|----------------------------------|---------------------------------------------------|-----------------------------------------------------|-----------------------------------------------------|
| **Type**                         | Block Storage                                     | File Storage (NFS)                                  | Ephemeral Block Storage                             |
| **Persistence**                  | Persistent                                        | Persistent                                          | Non-persistent (lost on stop/terminate)            |
| **Access**                       | One EC2 instance at a time                        | Multiple EC2 instances (shared)                     | One EC2 instance only                               |
| **Performance Types**            | gp3, gp2, io2, io1, st1, sc1                      | General Purpose, Max I/O                            | Depends on instance type                            |
| **Max Throughput**               | Up to 1,000 MiB/s                                 | Scales with usage (or provisioned)                  | Very high (dependent on instance)                   |
| **Scalability**                  | Up to 16 TiB per volume                           | Virtually unlimited                                 | Fixed by instance                                   |
| **Durability**                   | 99.999%                                           | 99.999999999%                                      | No durability guarantee                             |
| **Backup Support**              | Snapshots via EBS                                | Backup via AWS Backup                              | Not supported                                       |
| **Use Cases**                    | Databases, OS boot volumes, apps needing low latency | Shared web content, dev environments, home dirs     | Cache, temporary data, buffers                      |
| **Pricing Model**                | Pay per GB + IOPS (provisioned if needed)         | Pay per GB + throughput mode                        | Included in EC2 price                               |
| **Mounting Requirement**         | Attach to EC2, block device                       | Mount via NFSv4.1 or EFS mount helper               | Auto-attached on instance launch                    |
| **Data Encryption**              | Supported (at rest and in transit)                | Supported (at rest and in transit)                  | Not supported                                       |
| **Availability Zone Scope**      | Tied to single AZ (use EBS Multi-Attach or Snap for HA) | Regional (spans multiple AZs)                       | Tied to the EC2 host                                |
:::
