const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');

const db = require('../db/database.js');
const schema = require('./graphQLSchema');
const root = require('./graphQLRoot');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.use('/graphql', graphqlHTTP({
  schema,
  rootValue: root,
  graphiql: true,
}));

app.listen(port, () => {
  console.log(`Instructors service listening at http://localhost:${port}`);
});
