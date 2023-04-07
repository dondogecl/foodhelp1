const sql = require('../sql');
const { recipeSchema } = require('../schemas');

exports.addRecipe = async (req, res, next) => {
  const { error, value: body } = recipeSchema.validate(req.body);

  if (error) {
    res.status(400);
    return next(new Error(error.details[0].message));
  }

  if (!(await sql.findRecipeCategoryById(body.recipe_categoryid))) {
    res.status(400);
    return next(new Error('recipeCategory does not exist'));
  }

  const ingredients = await Promise.all(
    body.ingredientIds.map(async (id) => {
      const ingredient = await sql.findIngredientById(id);
      if (!ingredient) {
        res.status(400);
        return next(
          new Error('At least one of the ingredients does not exist')
        );
      }
      return ingredient;
    })
  );

  const { insertId } = await sql.insertNewRecipe(body);
  await Promise.all(
    ingredients.map(async (ingredient) => {
      await sql.insertRecipeItem({
        recipe_id: insertId,
        ingredient_id: ingredient.id,
      });
    })
  );

  const recipe = await sql.findRecipeById(insertId);
  res.json(recipe);
};

exports.getAllRecipes = async (req, res, next) => {
  const recipes = await sql.findAllRecipes();

  const recipesWithIngredients = await Promise.all(
    recipes.map(async (recipe) => {
      const ingredients = await sql.findRecipeIngredientsById(recipe.id);
      return { ...recipe, ingredients: ingredients };
    })
  );

  res.json(recipesWithIngredients);
};

exports.getRecipeById = async (req, res, next) => {
  const { id } = req.params;

  if (!id) {
    res.status(400);
    return next(new Error('recipeId is invalid'));
  }

  const recipe = await sql.findRecipeById(id);

  if (!recipe) {
    res.status(400);
    return next(new Error('recipe does not exist'));
  }

  const ingredients = await sql.findRecipeIngredientsById(id);
  res.json({ ...recipe, ingredients: ingredients });
};
