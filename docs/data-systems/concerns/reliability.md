# Reliability

- The application performs the functions that the user expect
- It can tolerate the user making mistakes or using the software in unexpected ways
- Its performance is good enough for the required use case, under the expected load and data volume
- The system prevents any unauthorized access and abuse

Things that can go wrong are called **faults** and system that can anticipate faults and can cope with them are called **fault-tolerant** or **resilient**.

Netflix has released [Chaos Monkey](https://netflix.github.io/chaosmonkey/) as an application to ensure that engineers implement their services to be resilient to instance failure by deliberating cause faults terminating instances. 

## Types of Faults

- **Hardware Faults**
- **Software Errors**
- **Human Errors**
