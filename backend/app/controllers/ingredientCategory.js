const sql = require('../sql');
const { ingredientCategorySchema } = require('../schemas');

exports.getAllIngredientCategories = async (req, res) => {
  const result = await sql.findAllIngredientCategories();
  res.json(result);
};

exports.getIngredientCategoryById = async (req, res, next) => {
  const { id } = req.params;

  if (!id) {
    res.status(400);
    return next(new Error('IngredientCategoryId is invalid'));
  }

  const result = await sql.findIngredientCategoryById(id);

  if (!result) {
    res.status(404);
    return next(new Error(`Ingredient Category Id: ${id} does not exist`));
  }

  res.json(result);
};

exports.getIngredientCategoryByName = async (req, res, next) => {
  const { name } = req.body;

  if (!name) {
    res.status(400);
    throw next(new Error('"name" is required'));
  }

  const result = await sql.findIngredientCategoryByName(name);

  if (!result) {
    res.status(404);
    return next(new Error(`Ingredient Category: ${name} does not exist`));
  }
  res.json(result);
};

exports.addIngredientCategory = async (req, res, next) => {
  const { error, value } = ingredientCategorySchema.validate(req.body);

  if (error) {
    res.status(400);
    return next(new Error(error.details[0].message));
  }

  const { insertId } = await sql.insertIngredientCategory(value);
  const ingredientCategory = await sql.findIngredientCategoryById(insertId);

  res.json(ingredientCategory);
};
