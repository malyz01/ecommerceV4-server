const jwt = require('jsonwebtoken');

const { user: User } = require('../models');
const { profile: Profile } = require('../models');

function getUserData(userObj) {
  const { id, email } = userObj;
  const userData = { id, email };
  const jwtToken = jwt.sign(userData, process.env.SECRET);
  return [userData, jwtToken];
}

async function userCreate(userInput) {
  const userObj = await User.create(userInput);
  await Profile.create({
    userId: userObj.id,
    firstName: userInput.firstName,
    lastName: userInput.lastName
  });
  const [user, jwtToken] = getUserData(userObj.dataValues);
  return { user, jwtToken };
}

async function userLogin(userInput) {
  const userObj = await User.findOne({
    where: { email: userInput.email }
  });

  if (userObj) {
    const isValid = await userObj.isValidPassword(userInput.password);
    if (isValid) {
      const [user, jwtToken] = getUserData(userObj.dataValues);
      return { user, jwtToken };
    } else {
      throw new Error('Invalid password');
    }
  } else {
    throw new Error('User does not exist');
  }
}

async function userFetchAll() {
  return await User.findAll();
}

async function userFetch(id) {
  const user = await User.findOne({ where: { id } });
  return user.dataValues;
}

module.exports = {
  userLogin,
  userCreate,
  userFetch,
  userFetchAll
};
