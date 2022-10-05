// PG database client/connection setup
const { Pool } = require('pg');
//require('dotenv').config({ path: require('find-config')('.env') })

const dbParams = {
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
};

const db = new Pool(dbParams);

db.connect();
console.log(process.env.DB_HOST)

module.exports = db;
