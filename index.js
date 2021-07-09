const express = require("express");
const { ApolloServer, gql } = require("apollo-server-express");
const { typeDefs } = require("./schema/typeDefs");
const { resolvers } = require("./schema/resolvers");

async function startApolloServer() {
  const server = new ApolloServer({ typeDefs, resolvers });
  await server.start();

  const app = express();
  server.applyMiddleware({ app });

  await new Promise((resolve) => app.listen({ port: 4000 }, resolve));
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`);
  return { server, app };
}

startApolloServer();
