# Tactical Modernization

To implement DDD into a legacy system

## Strangler Pattern

Start creating a new bounded context - **the strangler** - and use it to implement new requirements. Gradually migrate the legacy context's functionalities into it. 

Usually the **Strangler Pattern** is used in tandem with the **Facade Pattern**: a thin abstraction layer that acts as the public interface and is in charge o forwarding the requests to processing either by the legacy or the modernized boundered context. When migration completes, let the legacy and the facade die.

While migrating, both the modernized and the legacy can share the same database, avoiding complex integration between the contexts.

## Nuances to be aware of

1. Small incremental steps are safer than a big rewrite
2. Gradually introduce the elements of the domain model pattern, refactoring to a domain model doesn't have to be atomic change
3. Applying DDD is not an all-or-nothing, integration with other design patterns could be fine
