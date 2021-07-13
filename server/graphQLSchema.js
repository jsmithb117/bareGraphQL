const { buildSchema } = require('graphql');

const schema = buildSchema(
  `
  type Course {
    courseNumber: Int
    isPrimaryInstructor: Boolean
  },
  type Instructor {
    id: Int
    firstName: String
    middleInitial: String
    lastName: String
    academicTitle: String
    title: String
    organization: String
    learners: Int
    courses: [Course]
    instructorAverageRating: String
    numberOfRatings: Int
  },
  type Query {
    rollDice(numDice: Int!, numSides: Int): [Int]
    getInstructor(courseNumber: Int!): Instructor
  }
  `,
);

module.exports = schema;
