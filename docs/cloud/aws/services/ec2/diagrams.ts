import endent from 'endent'

export const loadBalancerDiagram = endent`
flowchart LR
    subgraph CLIENTS [Clients]
        direction TB
        Client1["👤"]
        Client2["👤"]
        Client3["👤"]
    end

    LB{"Load Balancer"}

    subgraph EC2S [EC2 Instances]
        direction TB
        EC2_1["EC2 Instance"]
        EC2_2["EC2 Instance"]
    end

    Client1 --> LB
    Client2 --> LB
    Client3 --> LB

    LB --> EC2_1
    LB --> EC2_2
`
