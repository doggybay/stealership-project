# Stealership

## Overview

You were hired as a contractor by a used car dealership group called "Stealership". They have multiple locations around the world and really need a way to manage their inventory. Your job is to create a way for them to keep track of their past and present inventory. They are very flexible with the layout you choose to design it, but they are adamant about the functionality, not at all like your instructors...

## Available Routes

### Cars

- GET (http://localhost:8082/api/stealership/api/cars)[http://localhost:8082/api/stealership/api/cars]
- GET (http://localhost:8082/api/stealership/api/cars/:id)[http://localhost:8082/api/stealership/api/cars/1] (example id of 1)
- POST http://localhost:8082/api/stealership/api/cars (request body is all fields, other than id)
- PATCH http://localhost:8082/api/stealership/api/cars/:id (request body is all fields, other than id)
- DELETE http://localhost:8082/api/stealership/api/cars/:id (request body is nothing)

### Locations

- GET (http://localhost:8082/api/stealership/api/locations)[http://localhost:8082/api/stealership/api/locations]
- GET (http://localhost:8082/api/stealership/api/locations/:id)[http://localhost:8082/api/stealership/api/locations/1] (example id of 1)
- POST http://localhost:8082/api/stealership/api/locations (request body is all fields, other than id)
- PATCH http://localhost:8082/api/stealership/api/locations/:id (request body is all fields, other than id)
- DELETE http://localhost:8082/api/stealership/api/locations/:id (request body is nothing)

## Desired Features

### Base Features (Required)

- As a user, I can add a car
- As a user, I can remove a car
- As a user, I can mark a car as sold or unsold (to account for returns)
- As a user, I can edit a car's details

### Stretch Features (Not required)

- As a user, I can see one car and all of its details

- As a user, I can see all of the locations
- As a user, I can see one location and all of its details
- As a user, I can add a location
- As a user, I can remove a location
- As a user, I can edit a location's details

### Super Stretch

- As a user, I can view the cars by location
- As a user, I can search the cars by any individual field

### Nightmare Mode

- As a user, I can view a chart/graph of the sales over a given time period
- As a user, I can view a chart/graph of thes sales by a single location over a given time period

## Other notes

- Required technologies: React/Redux
- Prop types in every component with props IS required.
- React Router is NOT required, but it might make organizing the data a little easier than stuffing it all into one page.
- Choose your design library at your own risk, i.e. Reactstrap, SemanticUI, MaterialUI, etc.
