# Functions that interacts with back-end

The back-end is implemented using Firebase - Cloud Firestore by Google, therefore we are not using RESTful APIs for our back-end. Instead, functions are used to interact with the database

Backend code are all placed in the folder `src/server`.

## Getting all events
`getAllEvents`: logs all data in the console. Returns an array of events (stored as objects).

## Add events
`addEvent`: takes an event object as argument. Ensures that the object contains the correct fields, then adds the object into Cloud Firestore.