const { profile } = require('../models');

function profileCreate(data) {
  return profile.create(data);
}

function profileFetchAll() {
  return profile.findAll();
}

function profileFetch(id) {
  return profile.findOne({
    where: {
      userId: id
    }
  });
}

module.exports = {
  profileCreate,
  profileFetchAll,
  profileFetch
};
