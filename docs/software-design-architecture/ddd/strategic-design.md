# Domain-driven Design : Strategic design

The **strategic** aspect of DDD deals with answering the questions of **"What?"** and **"Why?"**.

## Analyzing Business Domains

A business domain defines a company's main area of activity. Generally speaking, it's the service/services the company provide to its clients. Every service provided is a **subdomain**

### Subdomains

To achive its business domain's goals and targets, a company has to operate in multiple **subdomains**. A **subdomain** is a fine-grained area of business activity, it's just a building block in the overarching system.

Domain-driven design distinguishes between three types of subdomains:
- **Core** : is what a company does differently from its competitors, intrinsically difficult, not necessarily technical
- **Generic** : business activities that all companies are performing in the same way ( like authentication or authorization ), usually an existing solution
- **Supporting** : support company's business, no competitive advantage, usually simple.

| Subdomain type | Competitive advantage | Complexity | Volability | Implementation     | Problem     |
|----------------|-----------------------|------------|------------|--------------------|-------------|
| Core           | Yes                   | High       | High       | In-house           | Interesting |
| Generic        | No                    | High       | Low        | Buy/adopt          | Solved      |
| Supporting     | No                    | Low        | Low        | In-house/outsource | Obvious     |
