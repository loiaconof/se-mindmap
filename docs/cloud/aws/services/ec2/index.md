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
- **Limitations**:
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

## Storage

[EC2 Storage](/docs/cloud/aws/services/ec2/storage.md)

## Elastic Load Balancers (ELB)

[ELB](/docs/cloud/aws/services/ec2/load-balancers.md)

## Auto Scaling Group (ASG) 

[ASG](/docs/cloud/aws/services/ec2/autoscaling-group.md)

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
