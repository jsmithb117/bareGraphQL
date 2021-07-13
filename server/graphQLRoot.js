const db = require('../db/database');

const root = {
  rollDice: ({ numDice, numSides }) => {
    const output = [];
    for (let i = 0; i < numDice; i++) {
      output.push(1 + Math.floor(Math.random() * (numSides || 6)));
    }
    return output;
  },
  getInstructor: ({ courseNumber }) => {
    return db.getInstructor(courseNumber);
  },
};

module.exports = root;
