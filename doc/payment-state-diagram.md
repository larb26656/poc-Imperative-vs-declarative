```mermaid
stateDiagram-v2
    [*] --> PENDING
    PENDING --> SUCCESS
    PENDING --> CANCEL: Staff cancel
    SUCCESS --> [*]
    CANCEL --> [*]
```
