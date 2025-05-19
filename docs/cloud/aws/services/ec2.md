# Amazon Elastic Compute Cloud (EC2)

**Amazon Elastic Compute Cloud (EC2)** is a web service that provides secure, resizable compute capacity in the cloud. It is designed to make web-scale cloud computing easier for developers by providing virtual servers, known as instances, on demand.

This service is a way to implement [IaaS](/docs/cloud/services/index.md) con AWS.

It mainly consists in the capability of :
- Renting virtual machines (EC2)
- Storing data on virtual drives (EBS)
- Distributing load across machines (ELB)
- Scaling the services using an auto-scaling group (ASG)

## Key Concepts

### 1. Instances

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
``` md [Naming Convention]
```

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

### 2. Security Groups

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

### 3. Elastic IPs

- Static, public IPv4 addresses for dynamic cloud computing.
- Useful for replacing failed instances without changing your IP address.

## Saving Plans

