const {
  getRecipes,
  getAllIngredients,
  addIngredient,
} = require('../controllers/controllers.recipes');

module.exports = function (app) {
  //app.get('/api/getAllRecipes', getRecipes);
  app.get('/api/getAllIngredients', getAllIngredients);
  app.post('/api/addIngredient', addIngredient);
};
