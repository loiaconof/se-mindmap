# Auto Scaling Group (ASG) 

An **Auto Scaling Group (ASG)** is **AWS’s solution for horizontal scalability**, allowing your application to automatically add or remove EC2 instances based on demand.

ASG's orchestration of EC2 Instances allows to scale out or scale in to match the load.

## Key Features:

- **Horizontal Scaling**: Automatically increases or decreases the number of EC2 instances (scale-out/scale-in) to meet performance or cost goals.
- **Health Checks**: Continuously monitors and replaces unhealthy instances.
- **Capacity Settings**: Configure minimum, maximum, and desired number of instances.
- **Launch Template/Configuration**: Specifies the settings for launching new instances (AMI, instance type, networking, etc.).
- **Integration**: Seamlessly works with Elastic Load Balancer, CloudWatch alarms, and Lifecycle Hooks for:
  - **advanced control**
  - **scale horizontally**

## Scaling Policies

• **Dynamic Scaling**
  • **Target Tracking Scaling**: 
  • **Simple / Step Scaling**: Use a CloudWatch alarm is trigger to scale
• **Scheduled Scaling**: Anticipate a scaling based on known usage patterns
• **Predictive scaling**: Continuously forecast load and schedule scaling ahead
