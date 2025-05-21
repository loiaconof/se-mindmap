# Amazon Elastic Compute Cloud (EC2)

**Amazon Elastic Compute Cloud (EC2)** is a web service that provides secure, resizable compute capacity in the cloud. It is designed to make web-scale cloud computing easier for developers by providing virtual servers, known as instances, on demand.

This service is a way to implement [IaaS](/docs/cloud/services/index.md) con AWS.

It mainly consists in the capability of :
- Renting virtual machines (EC2)
- Storing data on virtual drives (EBS)
- Distributing load across machines (ELB)
- Scaling the services using an auto-scaling group (ASG)

## Instances

- Virtual servers for running applications
- [Instance Types](https://aws.amazon.com/ec2/instance-types/) include:
  - General Purpose
  - Compute Optimized
  - Memory Optimized
  - Storage Optimized
  - Accelerated Computing
- [Instance Types comparison](https://instances.vantage.sh/)
  
::: details Instance Types

::: code-group
``` md [General Purpose]
- Great for diversity of workloads such as web servers or code repositories
- Balance between
  - Compute
  - Memory
  - Networking
```

``` md [Compute Purpose]
- Great for compute-intensive tasks that require high performance processors
- Use Cases:
  - Barch processing workloads
  - Media transcoding
  - High performance web servers
  - High performance computing ( HPC )
  - Scientific modeling & machine learning
  - Dedicated gaming servers
```

``` md [Memory Optimized]
- Fast performance for workloads that process large data sets in memory
- Use Cases:
  - High performance, relational/non-relational databases
  - Distributed web scale cache stores
  - In-memory database optimized for BI ( Business Intellingence )
  - Applications performing real-time processing of big unstructured data
```

``` md [Storange Optimized]
- Great for storage-intensive tasks that require:
  - high, sequential read and write access to large data sets on local storage
- Use Cases:
  - High frequency online transaction processing ( OLTP ) systems
  - Relational & NoSQL databases
  - Cache for in-memory databases ( e.g. Redis )
  - Data warehousing applications
  - Distributed file systems
```
:::

## Security Groups

- Virtual firewalls that control inbound and outbound traffic on EC2 instances
- Security groups rules can reference by IP or by security group
- They regulate:
  - Access to Ports
  - Authorised IP ranges - IPv4 and IPv6
  - Control of inbound network ( from other to the instance )
  - control of outbound network ( from the instance to other )
- Good to know:
  - **Can be attached to multiple instances**
  - **Locked down to a region / VPC compination**
  - **Does live “outside” the EC2** – if traffic is blocked the EC2 instance won’t see it
  - **maintain one separate security group for SSH access**
  - **inbound traffic** is blocked by default
  - **outbound traffic** is authorised by default

::: details Security Groups example
``` md
| Type            | Protocol | Port Range | Source            | Description    |
|-----------------|----------|------------|-------------------|----------------|
| HTTP            | TCP      | 80         | 0.0.0.0/0         | test http page |
| SSH             | TCP      | 22         | 122.149.196.85/32 |                |
| Custom TCP Rule | TCP      | 4567       | 0.0.0.0/0         | java app       |
```
:::

## Elastic IPs

- Static, public IPv4 addresses for dynamic cloud computing.
- Useful for replacing failed instances without changing your IP address.

## Placement Groups

- Provide control over how instances are placed on the underlying hardware to optimize performance and availability
- Placement Group Types:
  - **Cluster Placement Group**
    - **Purpose**: Achieve low network latency and high network throughput
    - **Placement**: Instances are placed physically close within a single Availability Zone
    - **Use Case**: High-performance computing (HPC), big data workloads, tightly coupled node-to-node communication
  - **Spread Placement Group**
    - **Purpose**: Maximize availability by placing instances on distinct hardware
    - **Placement**: Each instance is placed on a separate rack (separate hardware)
    - **Use Case**: Critical applications where hardware failure must not impact multiple instances
    - **Limit**: Up to 7 running instances per AZ per spread group
  - **Partition Placement Group**
    - **Purpose**: Separate groups of instances (partitions) to minimize failure impact
    - **Placement**: Instances are divided into partitions, each on distinct racks with isolated network and power
    - **Use Case**: Large-scale distributed systems like HDFS, Cassandra, or Kafka
    - **Limit**: Up to 7 partitions per AZ (depending on the instance type and region)

## ENI - Elastic Network Interfaces

- Represents a **virtual network card** inside a specific availability zone (AZ)
- Can be **created independently** and **attached on the fly** (move them) on EC2 instances **for failover**
- The ENI can have the **following attributes**:
  - Primary private IPv4, one or more secondary IPv4
  - One Elastic IP (IPv4) per private IPv4
  - One Public IPv4
  - One or more security groups
  - A MAC address
- [More on ENI](https://aws.amazon.com/blogs/aws/new-elastic-network-interfaces-in-the-virtual-private-cloud/)

## Hibernate

- EC2 Hibernate allows the **in-memory (RAM) state preservation writing the RAM state to a file in the root EBS volume**
- Limitations:
  - The **root EBS Volume must be encrypted**
  - Instance **RAM Size must be less than 150 GB**
  - An instance **can NOT be hibernated more than 60 days**
- **Use cases**:
  - Long-running processing
  - Saving the RAM state
  - Services that take time to initialize

## AMIs - Amazon Machine Images 

- AMI are a **customization of an EC2 instance**
  - You add your own software, configuration, operating system, monitoring…
  - Faster boot / configuration time because all your software is pre-packaged
- AMI are built for a **specific region** (and can be copied across regions)
- You can launch EC2 instances from:
  - **A Public AMI**: AWS provided
  - **Your own AMI**: you make and maintain them yourself
  - **An AWS Marketplace AMI**: an AMI someone else made
- Before creating an AMI, **make sure the instance is stopped** (for data integrity)

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

## Saving Plans

- On-Demand Instances
- Reserved Instances (1 & 3 years)
- Convertible Reserved Instances
- Savings Plans (1 & 3 years)
- Spot Instances
- Dedicated Hosts
- Dedicated Instances
- Capacity Reservations

::: details

### 1. On-Demand Instances

- Pay for what you use ( per second/hour depending on the os )
- Highest cost but no upfront payment
- No long-term commitment
- Recommended for short-term and un-interrupted workloads, where you can't predict how the application will behave

### 2. Reserved Instances (1 & 3 years)

- Up to **72% discount** compared to On-demand
- You reserve a **specific instance attributes** ( Instance Type, Region, Tenancy, OS )
- **Reservation Period** : 1 year (+discount) or 3 years (+++discount)
- **Payment Options** : No Upfront (+), Partial Upfront (++), All Upfront (+++)
- **Reserved Instance’s Scope** : Regional or Zonal ( reserve capacity in an AZ )
- Recommended for steady-state usage applications ( think database )
- You can buy and sell in the Reserved Instance Marketplace

#### 2.1 Convertible Reserved Instances

- Can change the EC2 instance type, instance family, OS, scope and tenancy
- Up to 66% discount

### 3. Savings Plans (1 & 3 years)

- Get a discount based on long-term usage (up to 72% - same as Reserved Instances)
- Commit to a certain type of usage ($10/hour for 1 or 3 years)
- Usage beyond EC2 Savings Plans is billed at the On-Demand price
- Locked to a specific instance family & AWS region (e.g., M5 in us-east-1)
  - Flexible across:
    - Instance Size (e.g., m5.xlarge, m5.2xlarge)
    - OS (e.g., Linux, Windows)
    - Tenancy (Host, Dedicated, Default)

### 4. Spot Instances

- Can get a discount of up to 90% compared to On-demand
- Instances that you can “lose” at any point of time if your max price is less than the
current spot price
- The **MOST cost-efficient** instances in AWS
- **Useful for workloads that are resilient to failure**
  - Batch jobs
  - Data analysis
  - Image processing
  - Any distributed workloads
  - Workloads with a flexible start and end time
- **Not suitable for critical jobs or databases**

### 5. Dedicated Hosts

- A physical server with EC2 instance capacity fully dedicated to your use
- Allows you address **compliance requirements and use your existing server - bound software licenses** (per-socket, per-core, pe—VM software licenses)
- **Purchasing Options**:
  - **On-demand** – pay per second for active Dedicated Host
  - **Reserved** - 1 or 3 years (No Upfront, Partial Upfront, All Upfront)
- The most expensive option
- Useful for **software that have complicated licensing model** (BYOL – Bring Your Own License)
- Or for companies that have strong regulatory or compliance needs

### 6. Dedicated Instances

- Instances run on hardware that’s dedicated to you
- May share hardware with other instances in same account
- No control over instance placement (can move hardware after Stop / Start)

### 7. Capacity Reservations

- Reserve **On-Demand** instances capacity in a specific AZ for any
duration
- You always have access to EC2 capacity when you need it
- **No time commitment** (create/cancel anytime), **no billing discounts**
- Combine with Regional Reserved Instances and Savings Plans to benefit from billing discounts
- You’re charged at On-Demand rate whether you run instances or not
- Suitable for short-term, uninterrupted workloads that needs to be in a specific AZ

:::





<!-- ## Security Best Practices

- Use **security groups** to control traffic.
- Enable **IAM roles** for EC2 to securely access AWS services.
- Regularly **patch and update** AMIs and applications.
- Enable **CloudWatch** and **CloudTrail** for monitoring and auditing.

## EC2 Lifecycle

1. **Launch**: Choose AMI, instance type, key pair, storage, and networking.
2. **Running**: Instance is active and accessible.
3. **Stop/Start**: Retain instance and data (EBS) but pause compute resources.
4. **Reboot**: Restart the instance without changing its configuration.
5. **Terminate**: Instance and attached instance store volumes are deleted.


## Monitoring and Management

- **Amazon CloudWatch**: Monitor instance metrics and set alarms.
- **EC2 Dashboard**: Manage instances, volumes, and snapshots.
- **AWS Systems Manager**: Automate common admin tasks.
- **Auto Scaling**: Automatically adjust capacity to maintain performance. -->
