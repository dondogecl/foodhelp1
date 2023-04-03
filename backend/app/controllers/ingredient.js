const sql = require('../sql');
const { ingredientSchema } = require('../schemas');

exports.getAllIngredients = async (req, res, next) => {
  const result = await sql.findAllIngredients();
  res.json(result);
};

exports.getIngredientById = async (req, res, next) => {
  const { id } = req.params;
  const ingredient = await sql.findIngredientById(id);

  if (!ingredient) {
    res.status(404);
    return next(new Error('Ingredient does not exist'));
  }
  return res.json(ingredient);
};

exports.getIngredientByName = async (req, res, next) => {
  const { name } = req.body;

  if (!name) {
    res.status(400);
    throw next(new Error('"name" is required'));
  }

  const ingredient = await sql.findIngredientByName(name);

  if (!ingredient) {
    res.status(404);
    return next(new Error(`Ingredient: ${name} does not exist`));
  }
  return res.json(ingredient);
};

exports.addIngredient = async (req, res, next) => {
  const { error, value } = ingredientSchema.validate(req.body);

  if (error) {
    res.status(400);
    return next(new Error(error.details[0].message));
  }

  const { insertId } = await sql.insertIngredient(value);
  const ingredient = await sql.findIngredientById(insertId);

  res.json(ingredient);
};
