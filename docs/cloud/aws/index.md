# AWS

## AWS Global Infrastructure

[AWS Global Infrastructure](/docs/cloud/aws/global-infrastucture/index.md) is a worldwide network of regions, data centers, and edge locations that deliver secure and reliable cloud services.

- **AWS Regions** – Geographic areas with multiple Availability Zones.
- **Availability Zones** – Isolated locations within regions for high availability.
- **Data Centers** – Physical buildings hosting AWS servers.
- **Edge Locations / Points of Presence** – Used for low-latency content delivery.

## AWS services

AWS services are services dislocated

- AWS Global Services:
  - [Identity and Access Management (IAM)](/docs/cloud/aws/services/iam.md) : Identity and Access Management
  - [Route 53](/docs/cloud/aws/services/route-53.md) : DNS service
  - CDN : Content Delivery Network
  - WAF : Web Application Firewall
- AWS Region-scoped services ( [Region Table](https://aws.amazon.com/about-aws/global-infrastructure/regional-product-services/) ):
  - [AWS Certificate Manager (ACM)](/docs/cloud/aws/services/acm.md): Provision, manage, deploy, and renew SSL/TLS certificates
  - [Aurora DSQL](/docs/cloud/aws/services/aurora.md): Serverless, distributed relational database optimized for transactional workloads
  - [Relational Database Service (RDS)](/docs/cloud/aws/services/rds.md): Web service that makes it easier to set up, operate, and scale a relational database
  - [Elastic Compute Cloud (EC2)](/docs/cloud/aws/services/ec2/index.md) : Infrastructure as a Service
  - Elastic Beanstalk : Platform as a Service
  - Lambda : Function as a Service
  - Rekognition : Software as a Service
  - [Cloud Shell](/docs/cloud/aws/services/cloud-shell.md) : AWS Cli on browser

## AWS Networking

- Use **Elastic IP** for fixed, manually managed IPs.
- Use **Route 53** for smart, global DNS routing.
- Use **Load Balancers** for distributing traffic across multiple targets with built-in health checks and scalability.

::: details Comparison
| Feature              | Elastic IP              | Route 53                  | Load Balancer                |
|----------------------|-------------------------|---------------------------|------------------------------|
| Type                 | Static IP               | DNS Service               | Traffic Distributor          |
| Scalability          | Manual                  | High                      | High                         |
| Failover             | Manual                  | DNS-based                 | Automatic                    |
| Load Distribution    | No                      | No                        | Yes                          |
| Best Use Case        | Fixed IP for single EC2 | Domain & global routing   | High-availability apps       |
| Cost Efficiency      | Free when attached      | Low                       | Pay per use (varies by type) |
:::

## Links

- [AWS Trainings](https://aws.amazon.com/training/)
