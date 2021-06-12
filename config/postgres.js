require('dotenv').config();

module.exports = {
  development: {
    username: process.env.PG_USER,
    password: process.env.PG_PASS,
    database: 'ecommerce',
    host: 'localhost',
    dialect: 'postgres'
  },
  test: {
    username: process.env.PG_USER,
    password: process.env.PG_PASS,
    database: 'ecommerce-test',
    host: 'localhost',
    dialect: 'postgres'
  },
  production: {
    url: process.env.DATABASE_URL,
    dialect: 'postgres'
  }
};
