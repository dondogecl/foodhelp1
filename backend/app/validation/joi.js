const Joi = require('joi');

const ingredientSchema = Joi.object({
  ingredient_category: Joi.number().integer().required(),
  name: Joi.string().min(3).max(50).required(),
  calories: Joi.number().integer().required(),
  price: Joi.number().precision(2).required(),
  ingredient_photo: Joi.string().max(50).required(),
});

const ingredientWithIdSchema = Joi.object({
  id: Joi.number().integer().required(),
  ingredient_category: Joi.number().integer().required(),
  name: Joi.string().min(3).max(50).required(),
  calories: Joi.number().integer().required(),
  price: Joi.number().precision(2).required(),
  ingredient_photo: Joi.string().max(50).required(),
});

const ingredientCategorySchema = Joi.object({
  category_name: Joi.string().max(50).required(),
});

const ingredientCategoryWithIdSchema = Joi.object({
  id: Joi.number().integer().required(),
  category_name: Joi.string().max(50).required(),
});

const recipeSchema = Joi.object({
  name: Joi.string().max(50).required(),
  recipe_categoryid: Joi.number().integer().required(),
  recipe_photo: Joi.string().max(50).required(),
  recipe_description: Joi.string().required(),
});

const recipeSchemaWithId = Joi.object({
  id: Joi.number().integer().required(),
  name: Joi.string().max(50).required(),
  recipe_categoryid: Joi.number().integer().required(),
  likes: Joi.number().integer().required(),
  dislikes: Joi.number().integer().required(),
  recipe_photo: Joi.string().max(50).required(),
  recipe_description: Joi.string().required(),
});

const recipeCategorySchemaWithId = Joi.object({
  id: Joi.number().integer().required(),
  category_name: Joi.string().max(50).required(),
});

const recipeCategorySchema = Joi.object({
  category_name: Joi.string().max(50).required(),
});

module.exports = {
  ingredientSchema,
  ingredientWithIdSchema,
  ingredientCategorySchema,
  ingredientCategoryWithIdSchema,
  recipeSchema,
  recipeSchemaWithId,
  recipeCategorySchema,
  recipeCategorySchemaWithId,
};
