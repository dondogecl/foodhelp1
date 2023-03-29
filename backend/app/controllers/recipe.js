const sql = require('../sql');
const { ingredientSchema, recipeSchema } = require('../validation/joi');

exports.addRecipe = async (req, res, next) => {
  try {
    const { error, value } = recipeSchema.validate(req.body);

    if (error) {
      res.status(400);
      next(new Error(error.details[0].message));
    }

    const { name, recipe_categoryid, recipe_photo, recipe_description } = value;

    // Awaiting frontend confirmation
    const [result] = await sql.insertNewRecipe(
      name,
      recipe_categoryid,
      recipe_photo,
      recipe_description
    );
    const recipe = await sql.getRecipe(result.insertId);
    res.json(recipe);
  } catch (error) {
    next(error);
  }
};

exports.getAllRecipes = async (req, res, next) => {
  try {
    const result = await sql.getAllRecipes();
    res.json(result);
  } catch (error) {
    next(error);
  }
};

exports.getRecipeIngredients = async (req, res, next) => {
  try {
    const id = null;
    const result = await sql.findRecipeIngredientsById(id);
    res.json(result);
  } catch (error) {
    next(error);
  }
};

exports.getAllRecipeCategories = async (req, res, next) => {
  try {
    const result = await sql.getIngredientCategories();
    res.json(result);
  } catch (error) {
    next(error);
  }
};

exports.getRecipeCategory = async (req, res, next) => {
  try {
    const { categoryId } = req.params;
    if (!categoryId) {
      res.status(400);
      next(new Error('categoryId is invalid'));
    }

    const [result] = await sql.getRecipeCategory(categoryId);
    if (!result) {
      next(new Error("category doesn't exist"));
    }
    res.json(result);
  } catch (error) {
    next(error);
  }
};
