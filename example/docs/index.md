
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
@startuml sign_in_sequence
skinparam backgroundColor transparent

title "Sign In Sequence Diagram"

actor User

participant AppDeviceTokenObtainPairView
participant "@action authenticate" as authenticate

entity AppDevice
entity User as UserModel

User -> authenticate: {"email": email, "password": password}
activate authenticate

authenticate -> UserModel: Look for User with email in DB
activate UserModel

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
