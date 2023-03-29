const {
  findAllIngredients,
  findIngredientById,
  findIngredientByName,
  insertIngredient,
} = require('./tables/ingredient');

const {
  getRecipeCategory,
  getRecipeCategories,
  getAllRecipes,
  getIngredientCategory,
  getRecipeIngredients,
  getIngredientCategories,
  getRecipe,
} = require('./tables/queries');

const { insertNewRecipe } = require('./tables/insertions');

module.exports = {
  /* ingredient.js */
  findIngredientById,
  findIngredientByName,
  findAllIngredients,
  insertIngredient,
  /* queries.js */
  getRecipeCategory,
  getRecipeCategories,
  getAllRecipes,
  getIngredientCategory,
  getRecipeIngredients,
  getIngredientCategories,
  getRecipe,
  /* insertions.js */
  insertNewRecipe,
};
