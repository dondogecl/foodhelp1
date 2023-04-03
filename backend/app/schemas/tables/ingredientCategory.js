const Joi = require('joi');

const ingredientCategorySchema = Joi.object({
  category_name: Joi.string().max(50).required(),
});

module.exports = {
  ingredientCategorySchema,
};
