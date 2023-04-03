const { ingredientSchema } = require('./tables/ingredient');
const { ingredientCategorySchema } = require('./tables/ingredientCategory');
const { recipeCategorySchema } = require('./tables/recipeCategory');
const { recipeSchema } = require('./tables/recipe');

module.exports = {
  ingredientSchema,
  ingredientCategorySchema,
  recipeCategorySchema,
  recipeSchema,
};
