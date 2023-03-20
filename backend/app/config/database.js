const mysql = require('mysql2');
const config = require('./config/env');
const { HOST, USER, PWD, DB } = config;

const pool = mysql
  .createPool({
    host: HOST,
    user: USER,
    password: PWD,
    database: DB,
  })
  .promise();

export default pool;
