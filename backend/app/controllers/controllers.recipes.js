const { getAllIngredients, getIngredient } = require('../services/queries');
const { insertIngredient } = require('../services/insertions');
const { ingredientSchema } = require('../validation/joi');

exports.getRecipes = (req, res) => {
  res.json({ data: 'recipes list' });
};

exports.getAllIngredients = async (req, res, next) => {
  try {
    const result = await getAllIngredients();
    res.json(result);
  } catch (error) {
    next(error);
  }
};

exports.addIngredient = async (req, res, next) => {
  try {
    const { error, value } = ingredientSchema.validate(req.body);

    if (error) {
      res.status(400);
      next(new Error(error.details[0].message));
    }

    const { ingredient_category, name, calories, price, ingredient_photo } =
      value;

    const [result] = await insertIngredient(
      ingredient_category,
      name,
      calories,
      price,
      ingredient_photo
    );

    const ingredient = await getIngredient(result.insertId);
    res.json(ingredient);
  } catch (error) {
    next(error);
  }
};
