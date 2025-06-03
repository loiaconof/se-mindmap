# Route 53

## Overview

Amazon Route 53 is a **scalable and highly available Domain Name System (DNS)** service designed to route end-user requests to applications hosted on AWS or elsewhere on the internet. It also offers **domain registration** and **health checking** capabilities.

## DNS Records

In Route 53, **DNS records** are used to define how requests for a domain are routed. Each record type serves a different purpose and is stored inside a **Hosted Zone**.

Each record contains:

- **Domain/subdomain Name** – e.g., example.com
- **Record Type** – e.g., A or AAAA
- **Value** – e.g., 12.34.56.78
- **Routing Policy** – how Route 53 responds to queries
- **TTL** – amount of time the record cached at DNS Resolvers

::: details Record Types

| Type     | Description                                 | Example                                                                 |
|----------|---------------------------------------------|-------------------------------------------------------------------------|
| **A**    | Maps hostname to an **IPv4** address        | `example.com → 192.0.2.1`                                               |
| **AAAA** | Maps hostname to an **IPv6** address        | `ipv6.example.com → 2001:db8::ff00:42:8329`                             |
| **CNAME**| Maps a subdomain to another hostname        | `www.example.com → myapp.heroku.com`                                   |
| **NS**   | Delegates DNS zone to name servers          | `example.com NS ns-123.awsdns-45.org`                                  |
| **MX**   | Specifies mail servers for email delivery   | `example.com MX 10 mail.example.com`                                   |
| **TXT**  | Contains arbitrary text                     | `example.com TXT "v=spf1 include:amazonses.com -all"`                  |
| **Alias**| AWS-specific record for AWS services        | `example.com Alias → my-load-balancer-123.elb.amazonaws.com`           |

> ⚠️ **CNAME records cannot be used at the apex domain** (e.g., `example.com`), but **Alias records can**.
:::

## Hosted Zones

In Route 53, a **Hosted Zone** is a container that holds the DNS records for a specific domain, such as `example.com`.

Each hosted zone is associated with a **domain name** and contains records that define how DNS queries for that domain and its subdomains should be handled.

There are two types of hosted zones:

| Type                    | Description                                                                 |
|-------------------------|-----------------------------------------------------------------------------|
| **Public Hosted Zone**  | Used for domains that must be accessible over the internet. These zones resolve DNS queries from public clients, such as browsers or mobile apps. |
| **Private Hosted Zone** | Used for domains that are only accessible within one or more **Amazon VPCs**. This is ideal for internal applications or microservices that should not be exposed publicly. |

::: details Examples

- A **Public Hosted Zone** might contain records like `www.example.com` → `A record` pointing to a public IP of a load balancer.
- A **Private Hosted Zone** might have `internal.example.com` → `A record` pointing to a private EC2 IP, resolvable only inside the VPC.
:::

## Routing Policies

Route 53 supports several policies to control how traffic is routed to resources:

| Policy                  | Description                                                                 | Supports Health Checks                   |
|-------------------------|-----------------------------------------------------------------------------|------------------------------------------|
| **Simple**              | Basic DNS response with no special routing.                                 | ❌                                       |
| **Weighted**            | Distributes traffic based on defined weights.                               | ✅ (optional)                            |
| **Latency-based**       | Routes traffic to the region with the lowest latency.                       | ✅ (optional)                            |
| **Failover**            | Active-passive configuration using health checks.                           | ✅ (required)                            |
| **Geolocation**         | Routes based on the user's location.                                        | ✅ (optional)                            |
| **Geoproximity**        | Location-based routing with traffic bias (requires Traffic Flow).           | ✅ (optional)                            |
| **Multi-Value Answer**  | Returns multiple healthy records (up to 8) to simulate load balancing.      | ✅ (required for health-based filtering) |

## Health Checks

Health checks monitor the availability and performance of your applications.

::: details Features
- HTTP, HTTPS, or TCP endpoint checks
- Health checks can trigger DNS failover
- Can be linked to CloudWatch Alarms
- Supports calculated (composite) health checks using Boolean logic
:::
