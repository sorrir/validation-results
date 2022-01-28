# Start the configurator's rest-api
```
$ npm run start
```

# Auto-pass component- and device-informations to the rest-api
```
$ npm run-script load-setup-info -- -s ../validation-results/R-OP-02/sorrir-code/info/setupInfo.json
$ npm run-script load-devices-info -- -d
```

# Use the rest-api to create component instances

```
$ curl -d '{
    "name": "sensor",
    "component": "sensor",
    "startState": "sensorStartState"
}' -X POST http://localhost:3000/add-component-instance -H 'Content-Type: application/json'

$ curl -d '{
    "name": "barrier",
    "component": "barrier",
    "startState": "barrierStartState"
}' -X POST http://localhost:3000/add-component-instance -H 'Content-Type: application/json'

$ curl -d '{
    "name": "DSB",
    "component": "DSB",
    "startState": "DSBStartState"
}' -X POST http://localhost:3000/add-component-instance -H 'Content-Type: application/json'

$ curl -d '{
    "name": "user",
    "component": "user",
    "startState": "userStartState"
}' -X POST http://localhost:3000/add-component-instance -H 'Content-Type: application/json'
```

# Use the rest-api to auto-connect compatible ports
```
$ curl -d '{}' -X POST http://localhost:3000/add-connections-auto -H 'Content-Type: application/json'
```

# Use the rest-api to crete units for component encapsulation
```
$ curl -d '{
    "count": 3
}' -X POST http://localhost:3000/create-units -H 'Content-Type: application/json'
```

# Use the rest-api to place component instances on units
```
$ curl -d '{
    "name": "sensor",
    "component": "sensor",
    "unit": "unit_1"
}' -X POST http://localhost:3000/map-component-instance-on-unit -H 'Content-Type: application/json'

$ curl -d '{
    "name": "barrier",
    "component": "barrier",
    "unit": "unit_2"
}' -X POST http://localhost:3000/map-component-instance-on-unit -H 'Content-Type: application/json'

$ curl -d '{
    "name": "DSB",
    "component": "DSB",
    "unit": "unit_2"
}' -X POST http://localhost:3000/map-component-instance-on-unit -H 'Content-Type: application/json'

$ curl -d '{
    "name": "user",
    "component": "user",
    "unit": "unit_3"
}' -X POST http://localhost:3000/map-component-instance-on-unit -H 'Content-Type: application/json'
```

# Use the rest-api to place units on instances
```
$ curl -d '{
    "unit": "unit_1",
    "device": "ext"
}' -X POST http://localhost:3000/map-unit-on-device -H 'Content-Type: application/json'

$ curl -d '{
    "unit": "unit_2",
    "device": "jetson-01"
}' -X POST http://localhost:3000/map-unit-on-device -H 'Content-Type: application/json'

$ curl -d '{
    "unit": "unit_3",
    "device": "pi3-01"
}' -X POST http://localhost:3000/map-unit-on-device -H 'Content-Type: application/json'
```

# TODO: Create Security Config

# Use the rest-api to place generate the final configuration file for the orchestrator
```
curl -d '{}' -X GET http://localhost:3000/get-configuration -H 'Content-Type: application/json' > configuration.json
```

