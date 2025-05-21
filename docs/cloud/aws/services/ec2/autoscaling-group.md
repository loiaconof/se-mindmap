# Auto Scaling Group (ASG) 

An **Auto Scaling Group (ASG)** is **AWS’s native solution for horizontal scalability**, enabling automatic scaling of EC2 instances based on real-time demand.

By orchestrating instance lifecycle events, ASGs automatically **scale out** (add instances) during high load and **scale in** (remove instances) when demand decreases, optimizing both performance and cost.

## Key Features

- **Horizontal Scaling**: Automatically adjusts the number of EC2 instances to match demand
- **Health Checks**: Detects and replaces unhealthy instances to maintain availability
- **Capacity Settings**: Define minimum, maximum, and desired capacity thresholds
- **Launch Template/Configuration**: Specifies instance settings (AMI, type, key pair, networking)
- **Seamless Integration**:
  - **Elastic Load Balancer (ELB)**: Distributes traffic across healthy instances
  - **CloudWatch Alarms**: Triggers scaling actions based on metrics
  - **Lifecycle Hooks**: Add custom actions during instance launch or termination

## Scaling Policies

ASGs support multiple policy types to automate instance scaling:

- **Dynamic Scaling**:
  - **Target Tracking Scaling**: Automatically adjusts capacity to maintain a target metric (e.g., 50% CPU).
  - **Simple / Step Scaling**: Uses CloudWatch alarms to trigger predefined scaling actions.
- **Scheduled Scaling**: Scales capacity at specific times based on predictable traffic patterns (e.g., business hours).
- **Predictive Scaling**: Uses machine learning to forecast traffic and proactively adjust capacity ahead of time.

## Common Use Cases

- Web applications with fluctuating traffic
- Microservices architectures
- Batch processing systems
- High availability environments

