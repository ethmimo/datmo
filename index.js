const { ApolloServer, gql } = require('apollo-server-micro');
const typeDefs = require('./src/typedefs/index.js');
const initResolvers = require('./src/resolvers.js');

const resolvers = initResolvers();

const server = new ApolloServer({
  typeDefs,
  resolvers,
  introspection: true,
  playground: true
});
module.exports = server.createHandler();
