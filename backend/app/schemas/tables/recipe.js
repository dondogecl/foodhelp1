const Joi = require('joi');

const recipeSchema = Joi.object({
  name: Joi.string().max(50).required(),
  recipe_categoryid: Joi.number().integer().required(),
  recipe_photo: Joi.string().max(50).required(),
  recipe_description: Joi.string().required(),
  ingredientIds: Joi.array().items(Joi.number().integer()).required(),
});

module.exports = {
  recipeSchema,
};
