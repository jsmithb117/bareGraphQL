This repo is a very simple implementation of GraphQL.

Sample query:

query {
    getInstructor(courseNumber: 1) {
        firstName,
        middleInitial,
        lastName
    }
}

returns:

{
    "data": {
        "getInstructor": {
            "firstName": "John",
            "middleInitial": "M",
            "lastName": "Smith"
        }
    }
}

Limitations: The mock database has courses 1-6.

Todo:  Style this Readme.