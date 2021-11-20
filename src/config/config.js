const dotenv = require("dotenv").config(); //instatiate environment variables
const { DB_USER, DB_PORT, DB_NAME, DB_PASSWORD, DB_DIALECT, DB_HOST } = process.env;

module.exports = {
  "username": DB_USER,
  "password": DB_PASSWORD,
  "database": DB_NAME,
  "host": DB_HOST,
  "port": DB_PORT,
  "dialect": DB_DIALECT,
  "operatorsAliases": "0"
};
