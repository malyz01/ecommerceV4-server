const db = require('../services');

module.exports = {
  Query: {
    users: db.User.fetchAll,
    user: db.User.fetch
  },
  Mutation: {
    createUser: db.User.create,
    login: db.User.login
  }
};
