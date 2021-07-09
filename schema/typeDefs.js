const { gql } = require("apollo-server-express");

// Construct a schema, using GraphQL schema language
const typeDefs = gql`
  type User {
    id: Int!
    name: String!
    age: Int!
    married: Boolean!
  }

  # Queries
  type Query {
    getAllUsers: [User!]!
  }

  #Mutations
  type Mutation {
    createUser(id: Int!, name: String!, age: Int!, married: Boolean!): User!
  }
`;

module.exports = { typeDefs };
