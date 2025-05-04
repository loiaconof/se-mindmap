# Events

An **Event** is something that has already happened, and should be formulated in the past tense.

## Structure

An **Event** is a data record that can be serialized and trasmitted using the message platform of choice. A typical event schema includes event's metadata and its payload. An **event's payload** also defines the event's type

::: details Event Structure Example
```json
{
  "type": "delivery-confirmed",
  "event-id": "3f1e4d2b-b9a7-4e02-89c6-1a7c2d7b6a1a",
  "correlation-id": "afc0f879-7d6e-4cd7-a7ce-61f1c0d8be2f",
  "delivery-id": "4d84b87f-f5e7-4b90-b5b8-98762c64ec6e",
  "timestamp": 1746372730,
  "payload": {
    "confirmed-by": "78a1f352-3d66-487a-90cb-e117d5cb6a9b",
    "delivery-time": 1746372945
  }
}
```
:::

## Types of Events

### Event notification

An **Event notification** is a message regarding a change in the business domain that other components will react to.

This type of event should not be verbose and shouldn't carry all the information needed for the subscribers to react to the event.

::: details Event notification example
```json
{
  "type": "paycheck-generated",
  "event-id": "3f1e4d2b-b9a7-4e02-89c6-1a7c2d7b6a1a",
  "delivery-id": "4d84b87f-f5e7-4b90-b5b8-98762c64ec6e",
  "timestamp": 1746372730,
  "payload": {
    "employee-id": "78a1f352-3d66-487a-90cb-e117d5cb6a9b",
    "link": "/paychecks/456123/2021/01"
  }
}
```
:::

Instead of carrying all the required information related to the event, the receiver can use the **link** to **fetch** more detailed information.

sequenceDiagram
    Producer->>+Consumer: Event notification
    Consumer->>+Producer: Fetch link

Event notification can be preferable:
- **Security**
  - Enforcing the recipient to explicitly query for the detailed information prevents sharing sensitive information over the message infrastructure and requires additional authorization of the subscribers to access the data
- **Concurrency**
  - In case of race conditions, querying explicitly allows getting the up-to-date state's data
  - If only one subscriber should process the event, the querying process can be integrated with **pessimistic locking**.


### Event-carried state transfer ( ECST )

The **Event-carried state transfer** messages notify subscribers about changes in the producer's internal state.

Contrary of the Event notification, ECST messages include all the data ( or partial data ) reflecting the change in the state.

::: details Event-carried state transfer example

::: code-group

```json [complete snapshot]
{
  "type": "customer-updated",
  "event-id": "3f1e4d2b-b9a7-4e02-89c6-1a7c2d7b6a1a",
  "customer-id": "4d84b87f-f5e7-4b90-b5b8-98762c64ec6e",
  "timestamp": 1746372730,
  "payload": {
    "first-name": "Francesco",
    "last-name": "Loiacono",
    "phone": "xxx-xx-xx-xxx",
    "status": "follow-up-set",
    "follow-up-date": "04-05-2025",
    "birthday": "11-02-1995",
    "version": 7
  }
}
```

```json [partial snapshot]
{
  "type": "customer-updated",
  "event-id": "3f1e4d2b-b9a7-4e02-89c6-1a7c2d7b6a1a",
  "customer-id": "4d84b87f-f5e7-4b90-b5b8-98762c64ec6e",
  "timestamp": 1746372730,
  "payload": {
    "status": "follow-up-set",
    "follow-up-date": "04-05-2025",
    "version": 8
  }
}
```

:::

ECST messages allows consumers to hold a **local cache** of the entities' states and work with it.

ECST can be preferable:
- **Data replication**
- **Fault tolerance**
  - the consumer can continue functionating even if the producer is not avaiable
- **Performance**
  - instead of querying the data sources each time the data is needed, all the data can be cached locally
- **Backend for frontend**

### Domain event

**Domain events** are somewhere between event notification and ECST messages. Those types of events a significant event in the business domain that happened during its lifecycle.

Domain events includes all the information describing the event.

::: details Domain event example
```json
{
  "type": "married",
  "person-id": "01b9a761",
  "payload": {
    "person-id": "126a7b61",
    "assumed-partner-last-name": true
  }
}
```
:::
