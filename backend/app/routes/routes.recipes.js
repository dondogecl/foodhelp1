const { getRecipes } = require('../controllers/controllers.recipes');

module.exports = function (app) {
  app.get('/api/getAllRecipes', getRecipes);
};
