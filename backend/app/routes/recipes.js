const { check } = require('express-validator');

const {
  getAllIngredients,
  getIngredientById,
  getIngredientByName,
  addIngredient,
} = require('../controllers/ingredient');

const {
  getAllIngredientCategories,
  getIngredientCategoryById,
  getIngredientCategoryByName,
  addIngredientCategory,
} = require('../controllers/ingredientCategory');

const {
  getAllRecipeCategories,
  getRecipeCategoryById,
  getRecipeCategoryByName,
  addRecipeCategory,
} = require('../controllers/recipeCategory');

// trick

const {
  registerUser,
  loginUser,
  getUserById,
  getAllUsers,
  getUserByEmail
} = require('../controllers/userController');

//trick

const {
  getRecipeById,
  getAllRecipes,
  addRecipe,
  deleteRecipeById
} = require('../controllers/recipe');

module.exports = function (app) {
  app.get('/api/getAllIngredients', getAllIngredients);
  app.get('/api/getIngredientById/:id', getIngredientById);
  app.get('/api/getIngredientByName', getIngredientByName);
  app.post('/api/addIngredient', addIngredient);

  app.get('/api/getAllIngredientCategories', getAllIngredientCategories);
  app.get('/api/getIngredientCategoryById/:id', getIngredientCategoryById);
  app.get('/api/getIngredientCategoryByName', getIngredientCategoryByName);
  app.post('/api/addIngredientCategory', addIngredientCategory);

  app.get('/api/getAllRecipeCategories', getAllRecipeCategories);
  app.get('/api/getRecipeCategoryById/:id', getRecipeCategoryById);
  app.get('/api/getRecipeCategoryByName', getRecipeCategoryByName);
  app.post('/api/addRecipeCategory', addRecipeCategory);

  app.get('/api/getRecipeById/:id', getRecipeById);
  app.get('/api/getAllRecipes', getAllRecipes);
  app.post('/api/addRecipe', addRecipe);
  // Delete recipe by ID
  app.delete("/api/:id", deleteRecipeById);

  app.get('/api/testa/', (req, res) => {
    // send json response with a message
    res.json({ message: 'Hello World!2' });
  });

  app.post('/api/register', [
    check('username').notEmpty().withMessage('Username is required'),
    check('email').isEmail().withMessage('Invalid email address'),
    check('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long'),
  ], registerUser);

  app.post('/api/login', loginUser);

  app.get('/api/user/:id/', getUserById);
  
  app.get('/api/user/', getAllUsers);

  app.get('/api/test/', (req, res) => {
    // send json response with a message
    res.json({ message: 'Hello World!' });
  });

  // find user by email
  app.get('/api/user/email/:email', getUserByEmail);

  //app.post('/api/user/register/', registerUser)
};
