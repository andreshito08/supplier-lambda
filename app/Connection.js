require('dotenv').config();
const mysql = require('mysql2/promise');

let connection;

const getConnection = async () => {
  connection = await mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    port: process.env.DB_PORT,
  });
  return connection;
};

module.exports = {getConnection};