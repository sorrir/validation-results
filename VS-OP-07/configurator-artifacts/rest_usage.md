# Start the configurator's rest-api
```
$ npm run start
```

# Auto-pass component- and device-informations to the rest-api
```
$ npm run-script load-setup-info -- -s ../validation-results/R-OP-07/sorrir-code/info/setupInfo.json
$ npm run-script load-devices-info -- -d
```

# Use the rest-api to create component instances
```
$ curl -d '{
    "name": "component",
    "component": "component",
    "startState": "componentStartState"
}' -X POST http://localhost:3000/add-component-instance -H 'Content-Type: application/json'
```

# Use the rest-api to crete units for component encapsulation
```
$ curl -d '{
    "count": 1
}' -X POST http://localhost:3000/create-units -H 'Content-Type: application/json'
```

# Use the rest-api to place component instances on units
```
$ curl -d '{
    "name": "component",
    "component": "component",
    "unit": "unit_1"
}' -X POST http://localhost:3000/map-component-instance-on-unit -H 'Content-Type: application/json'
```

# Use the rest-api to place unit on device
```
$ curl -d '{
    "unit": "unit_1",
    "device": "desktop-01"
}' -X POST http://localhost:3000/map-unit-on-device -H 'Content-Type: application/json'
```

# Use the rest-api to generate the final configuration file for the orchestrator
```
curl -d '{}' -X GET http://localhost:3000/get-configuration -H 'Content-Type: application/json' > configuration.json
```
