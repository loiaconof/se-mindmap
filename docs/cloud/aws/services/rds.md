# Relational Database Service (RDS)

It's a managed service that makes it easy to set up, operate, and scale a relational database in the cloud. It handles routine database tasks such as provisioning, patching, backup, recovery, and scaling.

::: details Supported Databases
- [Aurora](/docs/cloud/aws/services/aurora.md)
- **Postgres**
- **MySQL**
- **MariaDB**
- **Oracle**
- **Microsoft SQL Server**
- **IBM DB2**
:::

## Storage Auto Scaling

Helps you increase storage on your RDS DB instance dynamically, scaling verticaly automatically.

**Maximum Storage Threshold** can be set as a limit for DB  storage

## Read Replicas

**Read Replicas** allow you to scale out read-intensive workloads by creating one or more read-only copies of your database.

::: details Details
- **Up to 5** Read Replicas
- **Within AZ,** **Cross AZ** or **Cross Region**
- Replication is ASYNC, so **reads are eventually consistent**
- Replicas **can be promoted to their own DB**
- **Applications must update the connection string** to leverage read replicas
- For RDS Read Replicas within the **same region**, **no network cost when data goes from one AZ to another**
:::

## Deployment Options

| Option             | Description                                                           |
|--------------------|-----------------------------------------------------------------------|
| **Single-AZ**      | One database instance in one availability zone (AZ).                  |
| **Multi-AZ**       | Synchronous replication to standby in another AZ for HA and failover. |
| **Read Replicas**  | Asynchronous replicas in same/different regions to offload reads.     |
