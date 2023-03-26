const Joi = require('joi');

const ingredientSchema = Joi.object({
  ingredient_category: Joi.number().integer().required(),
  name: Joi.string().min(3).max(50).required(),
  calories: Joi.number().integer().required(),
  price: Joi.number().precision(2).required(),
  ingredient_photo: Joi.string().max(50).required(),
});

// Please add validation for Adding Recipe
// Please add validation for ingredient category
// Please add validation for recipe category

module.exports = { ingredientSchema };
