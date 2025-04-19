# Scalability

**Scalability** is the term used to describe a system's ability to cope with increased load.

Even if a system is working reliably today, that doesn't mean it will necessarily work reliably in the future, perhaps it will process much larger volumes of data than it did before.

## Describing Load

Load can be described with a few numbers which are called **load parameters**. The choice of parameters depends on the architecture of your system, they may be:
- request per second to a web server
- ratio of reads to writes in a database
- number of simultaneously active users in a chat room

[Twitter Fan-Out example](https://medium.com/@gitaeklee/system-design-fan-out-with-twitter-d071a6799893)

## Describing Performance

Once describe the load on the system you can investigate on what happens when the load increases. You can look it in two ways:

- how is the system is affected increasing a load parameter keeping the system resources unchanged?
- how much do you need to increase the resources if you want to keep the performance unchanged increasing a load parameter?

The first step is to focus on a performance metric—usually time (e.g., how many records can be processed per second). In systems that handle a variety of operations, this metric can vary widely. For that reason, it’s important to think of performance not as a single value, but as a **distribution** of values you can measure.

Most operations are reasonably fast, but there are occasional outliers that take much longer. Perhaps the slow operations are intrinsically more expensive or maybe the loss of a network packet and TCP retrasmission.

To capture and analyze these variations, use **percentiles**.

## Approaches for Coping with Load

There are two main approces:

- **Scaling up** - vertical scaling
- **Scaling out** - horizontal scaling

While data systems are stateful, the common choice is to scale up to keep the database on a single node. As the tools of abstractions for distributed systems get better, this common wisdom may change.
