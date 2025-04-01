# Kubernetes

Kubernetes aims to orchestrate its containers transparently.

Kubernetes is a distributed system, so the different components are "scattered" on different servers or machines within one or more networks.

## Core concepts

- **Cluster**:
  - the set of virtual machines or physical servers within one or more networks


## Cluster

The cluster is the set of nodes (virtual machines or physical servers within one or more networks) within the Kubernetes domain.

There are two different types of nodes:
- **Control Plane**:
  - it is responsible for orchestrating the containers and keeping them in the desired state in the cluster
- **Worker**
  - it is considered an application node

## Control Plane

The components running on these nodes work together to accept requests, route them, authenticate clients, configure cluster-wide networking, and manage system scaling.

### Etcd

- configuration persistence using a lightweight key-value database
  - stores information inside the ```/registry``` folder
- align nodes when a configuration changes or a node is added
- helps maintain the cluster state by electing leaders using the Raft consensus algorithm
  - maintains high availability even if one or more nodes fail

### API Server

- exposes APIs to communicate with kubernetes
- use of TLS protocol to handle authentication
- communication protocol
  - default ```REST HTTP```
  - some components like ```scheduler``` and ```controller``` communicate with the ```API Server``` via gRPC

### Kube Scheduler
