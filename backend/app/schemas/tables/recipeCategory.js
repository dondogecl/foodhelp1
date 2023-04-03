const Joi = require('joi');

const recipeCategorySchema = Joi.object({
  category_name: Joi.string().max(50).required(),
});

module.exports = {
  recipeCategorySchema,
};
