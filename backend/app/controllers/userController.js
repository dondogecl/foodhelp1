const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { validationResult } = require('express-validator');
const pool = require('../config/database');
const JWT_SECRET = require('../config/env').JWT_SECRET;

const { userSchema } = require('../schemas');
const { register, findUserByEmail, findUserById, getAllUsers, login } = require('../sql/tables/user');




exports.registerUser = async function (req, res) {
  try {
    const user = req.body;
    // Check if the user exists by email
    const existingUser = await findUserByEmail(user.email);
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists with that email.' });
    }
    // If the user doesn't exist, register them
    await register(user);
    res.status(200).send({message: 'User registered successfully!'});
  } catch (err) {
    console.error(err);
    res.status(500).send({message: 'Error registering user.'});
  }
}


// end of registerUser

exports.loginUser = async (req, res) => {
  // Extract user input data
  const { email, password } = req.body;
    
  try {
    const user = await login(email, password);
    if (!user) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }
    const token = jwt.sign({ userId: user.id }, JWT_SECRET, { expiresIn: '1h' });
    return res.status(200).json({ token, userId: user.id, username: user.username });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
};


exports.getUserById = async (req, res) => {
  console.log("get user by id controller");

  const userId = req.params.id;
  console.log("userId: " + userId);
  
  try {
    // Get user from database by user ID
    const [user] = await pool.query('SELECT * FROM users WHERE id = ?', [userId]);
    
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Return user data
    return res.status(200).json({ user });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
};

exports.getAllUsers = async (req, res) => {
  try {
    const [users] = await pool.query('SELECT * FROM users');
    return res.status(200).json({ users });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
};

exports.getUserByEmail = async function (req, res) {
  try {
    const email = req.params.email;
    const user = await findUserByEmail(email);
    if (!user) {
      return res.status(404).send('User not found.');
    }
    res.status(200).json(user);
  } catch (err) {
    console.error(err);
    res.status(500).send('Error finding user.');
  }
};