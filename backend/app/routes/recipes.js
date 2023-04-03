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

module.exports = function (app) {
  app.get('/api/getAllIngredients', getAllIngredients);
  app.get('/api/getIngredientById/:id', getIngredientById);
  app.get('/api/getIngredientByName', getIngredientByName);
  app.post('/api/addIngredient', addIngredient);

  app.get('/api/getAllIngredientCategories', getAllIngredientCategories);
  app.get('/api/getIngredientCategoryById/:id', getIngredientCategoryById);
  app.get('/api/getIngredientCategoryByName', getIngredientCategoryByName);
  app.post('/api/addIngredientCategory', addIngredientCategory);
};
