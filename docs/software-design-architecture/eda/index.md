# Event-Driven Architecture ( EDA )

**Event-Driven Architecture** is an architectural style in wich a system's components communicate with one another **asynchronously** by exchanging [event](/docs/software-design-architecture/eda/events.md) messages.

The world **driven** in the EDA means your whole system depends on succesfull delivery of the messages. Ensure that events are always delivered consistently, no matter what:

- Use **outbox pattern** to publish messages reliably
- When publishing messages, ensure that the **subscribers will be able to deduplicate the message** and identify and reorder out-of-order messages
- Leverage the **saga** and **process manager** patterns when orchestrating cross-bounded context process that require issuing compensating actions
