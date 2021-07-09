const { users } = require("../fetchData");

// Provide resolver functions for your schema fields
const resolvers = {
  Query: {
    getAllUsers() {
      return users;
    },
  },
  Mutation: {
    createUser(parent, args) {
      const newUser = args;
      users.push(newUser);
      return newUser;
    },
  },
};

module.exports = { resolvers };
