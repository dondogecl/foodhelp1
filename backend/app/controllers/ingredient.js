const sql = require('../sql');
const { ingredientSchema, recipeSchema } = require('../validation/joi');

exports.getAllIngredients = async (req, res, next) => {
  try {
    const result = await sql.findAllIngredients();
    res.json(result);
  } catch (error) {
    next(error);
  }
};

exports.getIngredientCategories = async (req, res, next) => {
  try {
    const result = await sql.getIngredientCategories();
    res.json(result);
  } catch (error) {
    next(error);
  }
};

exports.getIngredientCategory = async (req, res, next) => {
  try {
    const { ingredientId } = req.params;
    if (!ingredientId) {
      res.status(400);
      next(new Error('ingredientId is invalid'));
    }

    const [result] = await sql.getIngredientCategory(ingredientId);
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
      return next(new Error(error.details[0].message));
    }

    const { insertId } = await sql.insertIngredient(value);
    const ingredient = await sql.findIngredientById(insertId);

    res.json(ingredient);
  } catch (error) {
    next(error);
  }
};
