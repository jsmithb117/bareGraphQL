This repo is a very simple implementation of GraphQL.

Sample query:

query {
    getInstructor(courseNumber: 4) {
        firstName,
        middleInitial,
        lastName,
        courses {
            courseNumber,
            isPrimaryInstructor
        }
    }
}

returns:

{
    "data": {
        "getInstructor": {
            "firstName": "Peter",
            "middleInitial": "",
            "lastName": "Griffin",
            "courses": [
                {
                    "courseNumber": 4,
                    "isPrimaryInstructor": true
                },
                {
                    "courseNumber": 5,
                    "isPrimaryInstructor": true
                },
                {
                    "courseNumber": 3,
                    "isPrimaryInstructor": false
                }
            ]
        }
    }
}

Limitations: The mock database has courses 1-6.

Todo:  Style this Readme.