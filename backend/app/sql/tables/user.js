const bcrypt = require('bcrypt');
const sql = require('../../config/database');

async function findUserById(id) {
  const [[row]] = await sql.query(
    `SELECT id, username, email, password
     FROM users
     WHERE id = ?`,
    [id]
  );
  return row;
}

async function findUserByUsername(username) {
  const [[row]] = await sql.query(
    `SELECT id, username, email, password
     FROM users
     WHERE username = ?`,
    [username]
  );
  return row;
}

async function register(user) {
  const { username, email, password } = user;
  const [insert] = await sql.query(
    `INSERT INTO users (username, email, password)
     VALUES (?, ?, ?)`,
    [username, email, password]
  );
  return insert;
}

async function findUserByEmail(email) {
  const [[row]] = await sql.query(
    `SELECT id, username, email, password
     FROM users
     WHERE email = ?`,
    [email]
  );
  return row;
}

async function getAllUsers() {
  const [rows] = await sql.query(
    `SELECT id, username, email
     FROM users`
  );
  return rows;
}

async function login(email, password) {
  const user = await findUserByEmail(email);
  if (!user) {
    return null;
  }
  // const isMatch = await bcrypt.compare(password, user.password);
  // if (!isMatch) {
  //   return null;
  // }
  // compare password with user.password without bcrypt
  if (password !== user.password) {
    return null;
  }
  
  //const isMatch = await 

  delete user.password;
  return user;
}

module.exports = {
  findUserById,
  findUserByUsername,
  register,
  findUserByEmail,
  getAllUsers,
  login,
};