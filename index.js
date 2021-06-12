const IN_PROD = process.env.NODE_ENV === 'production';
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { ApolloServer } = require('apollo-server-express');

const db = require('./db');
const typeDefs = require('./typeDefs');
const resolvers = require('./resolvers');
const context = require('./context');
const { logServer } = require('./utils');

db.sequelize.authenticate();

const server = express();
server.use(cors());

const apollo = new ApolloServer({
  typeDefs,
  resolvers,
  context,
  playground: !IN_PROD
});

apollo.applyMiddleware({ app: server });

const port = process.env.PORT || 5000;

server.listen(port, () => {
  logServer(`Listening on port: ${port}`);
});
