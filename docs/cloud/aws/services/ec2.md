# EC2



## EC2 Instance Types

AWS has the following naming convention ```xy.zzzzzz```
- **x** : instance class
- **y** : hardware generation ( AWS improves them over time )
- **zzzzzz** : size of within the instance class

### EC2 Instance Types - General Purpose

- Great for diversity of workloads such as web servers or code repositories
- Balance between
  - Compute
  - Memory
  - Networking

### EC2 Instance Types - General Purpose

- Great for compute-intensive tasks that require high performance processors
- Use Cases:
  - Barch processing workloads
  - Media transcoding
  - High performance web servers
  - High performance computing ( HPC )
  - Scientific modeling & machine learning
  - Dedicated gaming servers

### EC2 Instance Types - Memory Optimized

- Fast performance for workloads that process large data sets in memory
- Use Cases:
  - High performance, relational/non-relational databases
  - Distributed web scale cache stores
  - In-memory database optimized for BI ( Business Intellingence )
  - Applications performing real-time processing of big unstructured data

### EC2 Instance Types - Storange Optimized

- Great for storage-intensive tasks that require high, sequential read and write access to large data sets on local storage
- Use Cases:
  - High frequency online transaction processing ( OLTP ) systems
  - Relational & NoSQL databases
  - Cache for in-memory databases
  - Data warehousing applications
  - Distributed file systems


## Security Groups

Security groups are fundamental of network security in AWS, they controls how traffic is allowed into or out EC2 Instances.

Security Groups are acting as firewalls and only contain **allow** rules.

They regulate:
- Access to Ports
- Authorised IP ranges - IPv4 and IPv6
- Control of inbound network ( from other to the instance )
- control of outbound network ( from the instance to other )

ex.
| Type            | Protocol | Port Range | Source            | Description    |
|-----------------|----------|------------|-------------------|----------------|
| HTTP            | TCP      | 80         | 0.0.0.0/0         | test http page |
| SSH             | TCP      | 22         | 122.149.196.85/32 |                |
| Custom TCP Rule | TCP      | 4567       | 0.0.0.0/0         | java app       |
