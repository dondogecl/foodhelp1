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
  insertIngredientCategory,
} = require('./tables/ingredientCategory');

const {
  findAllRecipeCategories,
  findRecipeCategoryById,
  findRecipeCategoryByName,
  insertRecipeCategory,
} = require('./tables/recipeCategory');

const {
  findAllRecipes,
  findRecipeById,
  findRecipeByName,
  deleteRecipeById,
  insertNewRecipe,
  findRecipeIngredientsById,
} = require('./tables/recipe');

const { insertRecipeItem } = require('./tables/recipe_items');

const {
  findUserById,
  findUserByUsername,
  register,
  findUserByEmail,
  getAllUsers,
  login,
} = require('./tables/user');

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
  insertIngredientCategory,
  /* recipeCategory.js */
  findAllRecipeCategories,
  findRecipeCategoryById,
  findRecipeCategoryByName,
  insertRecipeCategory,
  /* recipe.js */
  findAllRecipes,
  findRecipeById,
  findRecipeByName,
  deleteRecipeById,
  insertNewRecipe,
  findRecipeIngredientsById,
  /* recipe_item */
  insertRecipeItem,
  /* user.js */
  findUserById,
  findUserByUsername,
  register,
  findUserByEmail,
  getAllUsers,
  login,
};
