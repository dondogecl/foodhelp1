const {
  getRecipes,
  getAllIngredients,
  getIngredientById,
  getIngredientByName,
  addIngredient,
} = require('../controllers/ingredient');

module.exports = function (app) {
  //app.get('/api/getAllRecipes', getRecipes);
  app.get('/api/getAllIngredients', getAllIngredients);
  app.get('/api/getIngredientById/:id', getIngredientById);
  app.get('/api/getIngredientByName', getIngredientByName);
  app.post('/api/addIngredient', addIngredient);
};
