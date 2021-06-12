const jwt = require('jsonwebtoken');

const { logErr } = require('./utils');

module.exports = ({ req }) => {
  const auth = (req.headers && req.headers.authorization) || '';
  if (auth === '') return { isAuth: false, user: {} };

  const token = auth.split(' ')[1];
  let decodedToken;
  try {
    decodedToken = jwt.verify(token, process.env.SECRET);
  } catch (err) {
    logErr(err);
    return { isAuth: false, user: {} };
  }

  return { isAuth: true, user: decodedToken };
};
