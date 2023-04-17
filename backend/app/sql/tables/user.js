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
  const [[row]] = await sql.query(
    `SELECT id, username, email, password
     FROM users
     WHERE email = ?`,
    [email]
  );
  if (!row) {
    return null;
  }
  const isMatch = await bcrypt.compare(password, row.password);
  if (!isMatch) {
    return null;
  }
  delete row.password;
  return row;
}

module.exports = {
  findUserById,
  findUserByUsername,
  register,
  findUserByEmail,
  getAllUsers,
  login,
};