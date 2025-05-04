# Event Storming

Event Storming is a low-tech activity for a group of people to brainstorm and rapidly model business process.

The workshop can be facilitated for many reasons: 

- Build a ubiquitous language
- Model the business process
- Explore new business requirements
- Recover domain knowledge
- Explore ways to iprove an existing business process
- Onboard new team members

## The Event Storming process

* Unstructured exploration
  - list all domain events, no need to worry about ordering
* Timelines
  - organize the domain events flow, starting with the "**Happy path schenario**"
* Pain Points
  - identify domain events that require attention, make there inefficiencies explicit so that will be easy to return to them as the Event Storming session progresses
* Pivotal Events
  - identify significant business events that indicates a change in the context or phase 
* Commands
  - indentify commands, system's opeations describing what triggered the event of flow of events
* Policies
  - identify **automation policies**, events that trigger commands
* Read Models
  - indentify users interaction that trigger commands
* External Systems
  - augment the model with external system, external system any system that is not part of the domain being explored
* Aggregates
  - organize related concepts in aggregates, an aggregate receives commands and produces events
* Bounded Contexts
  - add aggregates relations, those groups of aggregates form natural candidates for bounded contexts' boundaries
