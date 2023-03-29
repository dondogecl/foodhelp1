const {
  findAllIngredients,
  findIngredientById,
  findIngredientByName,
  insertIngredient,
} = require('./tables/ingredient');

const {
  findAllIngredientCategories,
  findIngredientCategoryById,
  findIngredientCategoryByName,
} = require('./tables/ingredientCategory');

const {
  findAllRecipeCategories,
  findRecipeCategoryById,
  findRecipeCategoryByName,
} = require('./tables/recipeCategory');

const {
  findAllRecipes,
  findRecipeById,
  findRecipeByName,
  deleteRecipeById,
  insertNewRecipe,
  findRecipeIngredientsById,
} = require('./tables/recipe');

module.exports = {
  /* ingredient.js */
  findIngredientById,
  findIngredientByName,
  findAllIngredients,
  insertIngredient,
  /* ingredientCategory.js */
  findAllIngredientCategories,
  findIngredientCategoryById,
  findIngredientCategoryByName,
  /* recipeCategory.js */
  findAllRecipeCategories,
  findRecipeCategoryById,
  findRecipeCategoryByName,
  /* recipe.js */
  findAllRecipes,
  findRecipeById,
  findRecipeByName,
  deleteRecipeById,
  insertNewRecipe,
  findRecipeIngredientsById,
};
