const { ApolloServer, gql } = require('apollo-server');
const typeDefs = require('./src/typedefs/index.js');
const loadDB = require('./src/db.js');

const resolvers = loadDB();

const server = new ApolloServer({ typeDefs, resolvers });
module.exports = server.createHandler();
