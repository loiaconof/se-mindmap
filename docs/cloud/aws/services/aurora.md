# Amazon Aurora 

## Overview

Aurora DSQL is a serverless distributed SQL database that provides virtually unlimited scalability, highest availability, and zero infrastructure management.

::: details Supported Databases
- **Postgres**
- **MySQL**
:::

## Features

- **Automatic fail-over**: high Availability native, failover in Aurora is instantaneous
- **Backup and Recovery**: 
  - **Automatic continuous backups** to S3
  - **Point-in-time recovery**
  - **Snapshots** can be **shared across AWS accounts**
- **Isolation and security**
- **Industry compliance**
- **Push-button scaling**
- **Automated Patching with Zero Downtime**
- **Advanced Monitoring**
- **Routine Maintenance**
- **Backtrack**: restore data at any point of time without using backups
- **Support for Cross Region Replication**

## Aurora vs RDS

| Feature              | Amazon Aurora              | Amazon RDS (MySQL/PostgreSQL) |
|----------------------|----------------------------|-------------------------------|
| Performance          | Higher (up to 5x MySQL)    | Standard                      |
| Read Replicas        | Up to 15                   | Up to 5                       |
| Availability Zones   | 3 AZs default              | 1 AZ or Multi-AZ              |
| Auto-scaling Storage | Yes                        | Yes (limited)                 |
| Global DB Support    | Yes                        | No                            |
| Cost                 | Higher (20% more)          | Lower                         |
