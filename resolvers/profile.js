const db = require('../db/controller');

module.exports = {
  Query: {
    profiles: () => db.profileFetchAll(),
    profile: (_, arg, context) => {
      return db.profileFetch(arg.id);
    }
  },
  Mutation: {
    createUserProfile: (root, { userProfile }) => {
      return db.profileCreate(userProfile);
    }
  }
};
