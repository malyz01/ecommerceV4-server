const Profile = require('../db/models/Profile');

// GraphQL params
// (parent, arg, context) => {}

exports.create = (_, arg) => Profile.create(arg.userProfile);

exports.fetchAll = () => Profile.findAll();

exports.fetch = (_, arg) =>
  Profile.findOne({
    where: {
      userId: arg.id
    }
  });
