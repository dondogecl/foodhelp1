const sql = require('../sql');
const { recipeCategorySchema } = require('../schemas');

exports.getAllRecipeCategories = async (req, res) => {
  const result = await sql.findAllRecipeCategories();
  res.json(result);
};

exports.getRecipeCategoryById = async (req, res, next) => {
  const { id } = req.params;

  if (!id) {
    res.status(400);
    return next(new Error('IngredientCategoryId is invalid'));
  }

  const result = await sql.findRecipeCategoryById(id);

  if (!result) {
    res.status(404);
    return next(new Error(`Recipe Category Id: ${id} does not exist`));
  }

  res.json(result);
};

exports.getRecipeCategoryByName = async (req, res, next) => {
  const { name } = req.body;

  if (!name) {
    res.status(400);
    throw next(new Error('"name" is required'));
  }

  const result = await sql.findRecipeCategoryByName(name);

  if (!result) {
    res.status(404);
    return next(new Error(`Recipe Category: ${name} does not exist`));
  }
  res.json(result);
};

exports.addRecipeCategory = async (req, res, next) => {
  const { error, value } = recipeCategorySchema.validate(req.body);

  if (error) {
    res.status(400);
    return next(new Error(error.details[0].message));
  }

  const { insertId } = await sql.insertRecipeCategory(value);
  const recipeCategory = await sql.findRecipeCategoryById(insertId);

  res.json(recipeCategory);
};
