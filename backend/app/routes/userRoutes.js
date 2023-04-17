const express = require('express');
const { check } = require('express-validator');
//const userController = require('../controllers/userController');



//const app = express.Router();

// router.post('/register', [
//   check('username').notEmpty().withMessage('Username is required'),
//   check('email').isEmail().withMessage('Invalid email address'),
//   check('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long'),
// ], userController.registerUser);

// router.post('/login', userController.loginUser);

// module.exports = router;

const {
  registerUser,
  loginUser,
  getUserById,
  getAllUsers,
} = require('../controllers/userController');


module.exports = function (app) {
  app.post('/api/register', [
    check('username').notEmpty().withMessage('Username is required'),
    check('email').isEmail().withMessage('Invalid email address'),
    check('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long'),
  ], registerUser);

  app.post('/api/login', loginUser);

  app.get('/api/:id', getUserById);
  
  app.get('/api/getAllUsers', getAllUsers);

  app.get('/api/test1/', (req, res) => {
    // send json response with a message
    res.json({ message: 'Hello World!' });
  });
  
};