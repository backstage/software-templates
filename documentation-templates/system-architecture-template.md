<!--- Use this template to document the architecture of a system. Replace <system> in the title with the name of your system, and replace the prompt text under each section header with information relevant for your system. --->

# System Architecture for \<System>

## Overview

High-level single-paragraph description of the system defining its scope and purpose.

```plantuml format="svg"
@startuml Architecture Overview
!includeurl https://raw.githubusercontent.com/RicardoNiepel/C4-PlantUML/master/C4_Container.puml

Person(dev, "Developer")
Person(user, "End User")

System_Boundary(my_system, "Quuz System") {
    Container(foo, "Foo", "Backend Service", "An example component that is a backend service")
    Container(bar, "Bar", "Website", "An example component that is a website")
    Container(baz, "Baz", "CLI Tool", "An example component that is a command-line interface tool")
}

System_Ext(ext_system, "External system", "Another external system that your system interacts with")

Rel(dev, baz, "Uses via the terminal")
Rel(user, bar, "Controls bars via web forms")
Rel(bar, foo, "Fetches the list of bars")
Rel(baz, foo, "Fetches the list of bazes")
Rel(foo, ext_system, "Authenticates users who are allowed to fetch foos and bars")
@enduml
```

## Business impact

Statement describing the business impact.

## Architecture

### Components

Defined set of components in the system.

### Edge description

List of descriptions of edges between components which can be used in the automated rendering of a UML diagram, with each edge containing the following data:

* **Overview:** Required. What is the purpose of the connection?
* **Privacy:** Does the system transmit personally identifiable information (PII)?

## Best by

ISO-8601 date specifying when this documentation will be considered outdated.

## Technical debt

If relevant, a statement indicating current technical debt in the system, with constructive suggestions for improvement.

## Scalability

Statement on how the service scales with the number of users, and if there are any concerns about this through the projected 1-2 year future.

## Security

Statement of security concerns for the system, including whether it handles personal user data.

## Resources

List of links to other resources that are useful in the maintenance.
