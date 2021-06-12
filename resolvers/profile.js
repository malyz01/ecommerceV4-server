const db = require('../services');

module.exports = {
  Query: {
    profiles: db.Profile.fetchAll,
    profile: db.Profile.fetch
  },
  Mutation: {
    createUserProfile: db.Profile.create
  }
};
