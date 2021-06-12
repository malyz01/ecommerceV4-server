require('dotenv').config();

module.exports = {
  development: {
    username: process.env.PG_USER,
    password: process.env.PG_PASS,
    database: process.env.PG_DB,
    host: 'localhost',
    dialect: 'postgres'
  },
  test: {
    username: process.env.PG_USER,
    password: process.env.PG_PASS,
    database: 'test',
    host: 'localhost',
    dialect: 'postgres'
  },
  production: {
    url: process.env.DATABASE_URL,
    dialect: 'postgres'
  }
};
