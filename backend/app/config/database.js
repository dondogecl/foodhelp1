const mysql = require('mysql2');
const config = require('./env');
const { HOST, USER, PWD, DB } = config;

const pool = mysql
  .createPool({
    host: HOST,
    user: USER,
    password: PWD,
    database: DB,
    connectTimeout: 10000,
  })
  .promise();


console.log(config.PORT);  
// Test the database connection

(async function testConnection() {
  try {
    const [rows] = await pool.execute('SELECT 1');
    console.log('Database connection successful:', rows);
  } catch (error) {
    console.error('Error connecting to database:', error);
  }
})();



module.exports = pool;