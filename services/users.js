const jwt = require('jsonwebtoken');

const User = require('../db/models/User');
const Profile = require('../db/models/Profile');

// GraphQL params
// (parent, args, context, info) => {}

exports.fetchAll = () => User.findAll();

exports.fetch = (_, arg) => User.findOne({ where: { id: arg.id } });

exports.create = async (_, arg) => {
  const newUser = await User.create(arg.userInput);
  await Profile.create({
    userId: newUser.id,
    firstName: userInput.firstName,
    lastName: userInput.lastName
  });
  const [user, jwtToken] = getUserData(newUser.dataValues);
  return { user, jwtToken };
};

exports.login = async (_, arg) => {
  const userObj = await User.findOne({
    where: { email: arg.userInput.email }
  });

  if (userObj) {
    const isValid = await userObj.isValidPassword(arg.userInput.password);
    if (isValid) {
      const [user, jwtToken] = getUserData(userObj.dataValues);
      return { user, jwtToken };
    } else {
      throw new Error('Invalid password');
    }
  } else {
    throw new Error('User does not exist');
  }
};

function getUserData(userObj) {
  const { id, email } = userObj;
  const userData = { id, email };
  const jwtToken = jwt.sign(userData, process.env.SECRET);
  return [userData, jwtToken];
}
