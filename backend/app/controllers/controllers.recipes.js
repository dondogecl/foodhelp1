const { getAllIngredients, getIngredient } = require('../services/queries');
const { insertIngredient } = require('../services/insertions');
const { ingredientSchema } = require('../validation/joi');

exports.getAllRecipes = async (req, res, next) => {
  try {
    const result = await getAllRecipes();
    res.json(result);
  } catch (error) {
    next(error);
  }
};

exports.getRecipeCategories = async (req, res, next) => {
  try {
    const result = await getRecipeCategories();
    res.json(result);
  } catch (error) {
    next(error);
  }
};

exports.getRecipeCategory = async (req, res, next) => {
  try {
    const { error, value } = recipeCategorySchema.validate(req.body);

    if (error) {
      res.status(400);
      next(new Error(error.details[0].message));
    }

    const {id} = value;
    const [result] = await getRecipeCategory(id);
    res.json(result);
  } catch (error) {
    next(error);
  }
};

exports.getRecipeIngredients = async (req, res, next) => {
  try {
    const result = await getRecipeIngredients();
    res.json(result);
  } catch (error) {
    next(error);
  }
};

exports.addRecipe = async (req, res, next) => {
  try {
    const { error, value } = recipeSchema.validate(req.body);

    if (error) {
      res.status(400);
      next(new Error(error.details[0].message));
    }

    // Awaiting frontend confirmation

    res.json();
  } catch (error) {
    next(error);
  }
};

exports.getAllIngredients = async (req, res, next) => {
  try {
    const result = await getAllIngredients();
    res.json(result);
  } catch (error) {
    next(error);
  }
};

exports.getIngredientCategories = async (req, res, next) => {
  try {
    const result = await getIngredientCategories();
    res.json(result);
  } catch (error) {
    next(error);
  }
};

exports.getIngredientCategory = async (req, res, next) => {
  try {
    const { error, value } = ingredientCategorySchema.validate(req.body);

    if (error) {
      res.status(400);
      next(new Error(error.details[0].message));
    }

    const {id} = value;
    const [result] = await getIngredientCategory(id);
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
