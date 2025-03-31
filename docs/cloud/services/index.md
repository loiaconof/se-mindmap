# Cloud development services

## Services

There are different types of cloud development services, those differ on how much you delegate reponsabilities to the provider.

- IaaS: Infrastructure as a Service
- CaaS: Container as a Service
- PaaS: Platform as a Service
- SaaS: Software as a Service

## Responsabilities

::: code-group

``` yml [IaaS]
client:
  application
  data
  runtime
  container
  operating system
provider:
  virtualization
  server
  storage
  network
```

``` yml [CaaS]
client:
  application
  data
  runtime
provider:
  container
  operating system
  virtualization
  server
  storage
  network
```

``` yml [PaaS]
client:
  application
  data
provider:
  runtime
  container
  operating system
  virtualization
  server
  storage
  network
```

``` yml [SaaS]
client:
  -
provider:
  application
  data
  runtime
  container
  operating system
  virtualization
  server
  storage
  network
```

:::
