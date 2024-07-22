
# Dark Mode Demo

<div class="grid cards" markdown>

-   :fontawesome-solid-user:{ .lg .middle .mkdocspref } __Mkdocs Preference__

    ---

    DARK|LIGHT
    
    The mkdocs preference for light/dark.

    `(data-md-color-media)`

    


-   :material-web:{ .lg .middle .systempref } __System Preference__

    ---

    DARK|LIGHT

    The system preference for light/dark.

    `(prefers-color-scheme)`



</div>


## Example

```puml
@startuml
!include <C4/C4_Container>
skinparam backgroundColor transparent
!unquoted procedure Person()
  Person(personAlias, "Enduser", "Enduser uses My System")
!endfunction

!unquoted procedure BOUNDARY()
  System_Boundary(ms, "My System Boundary") {
    Container(mysystem, "My System", "Node, Angular", "Does really cool things")
  }
!endfunction

!unquoted procedure EXTSYSTEMS()
  System_Ext(sys_ext1, "Ext System 1", "Does things")
  System_Ext(sys_ext2, "Ext System 2", "Does things")
  System_Ext(sys_ext3, "Ext System 3", "Does things")
  System_Ext(sys_ext4, "Ext System 4", "Does things")
!endfunction

' Echo the persons
Person()
' The PB system context
BOUNDARY()
' echo the external systems
EXTSYSTEMS()

' Relationships
Rel(personAlias, mysystem, "via App or Web", "REST over HTTPS")
Rel(mysystem, sys_ext1, "Communicates", "REST")
Rel(mysystem, sys_ext2, "Communicates","GraphQL")
Rel(mysystem, sys_ext3, "Syncs Data", "REST")
Rel(mysystem, sys_ext4, "Communicates", "SOAP")

@enduml

```

Text under diagram.

## The second diagram

```puml
@startuml sign_in_objects
skinparam backgroundColor transparent

title "Sign In Objects"

top to bottom direction

package user_devices {
    package models as device_models {
        class AppDevice {
            Django model to keep the required information
            about user's authenticator app
            ..
            +user: OneToOne[User]
            +secret_key: str
        }
        AppDevice --o AppDevicePairSerializer
    }

}

@enduml
```

## This is the third diagram using custom keyword

```plantuml
@startuml
skinparam backgroundColor transparent
A -> B
@enduml
```

And here is just code

```python
print("Hello world")
```
