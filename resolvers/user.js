const db = require('../db/controller');

module.exports = {
  Query: {
    users: (_, __, context) => db.userFetchAll,
    user: (_, arg, context) => {
      return db.userFetch(arg.id);
    }
  },
  User: {
    profile: (parent) => db.profileFetch(parent.id)
  },
  Mutation: {
    createUser: (_, { userInput }) => db.userCreate(userInput),
    login: (_, { userInput }) => db.userLogin(userInput)
  }
};
