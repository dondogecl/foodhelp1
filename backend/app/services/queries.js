const pool = require('../config/database');

async function getIngredient(id) {
  const [rows] = await pool.query(
    `SELECT i.id, category_name, name, calories, price 
      FROM ingredients i 
      JOIN ingredient_category ic ON i.ingredient_category = ic.id
      WHERE i.id = ?`,
    [id]
  );
  /* NOTE: This always return an array. Since the query will only
    return one element in an array, he is a better practice to just
    return the first element through index. */
  console.log(rows[0]);
  return rows[0];
}

async function getAllIngredients() {
  const [rows] = await pool.query(
    `SELECT i.id, ingredient_category, name, calories, price, ingredient_category, ingredient_photo
    FROM ingredients i 
    JOIN ingredient_category ic ON i.ingredient_category = ic.id;`
  );
  console.log(rows);
  return rows;
}

async function getAllRecipes() {
  const [rows] = await pool.query(
    `SELECT r.id, r.name, rc.category_name, r.likes, r.dislike, r.recipe_photo, r.recipe_description
    FROM recipes r 
    JOIN recipe_categories rc ON r.recipe_categoryid = rc.id;`
  );
  console.log(rows);
  return rows;
}

async function getRecipe(id) {
  // Fill
}

async function getRecipeIngredients() {
  // Fill
}

async function getIngredientCategories() {
  // Fill;
}

async function getIngredientCategory(id) {
  // Fill
}

async function getRecipeCategories() {
  // Fill
}

async function getRecipeCategory(id) {
  // Fill
}


//Create query to INSERT  new recipes into the Recipe Table - DAN
export async function insertNewRecipe() 
{
  const [rows] = await pool.query(`INSERT INTO foodhelperDB.recipes (name,recipe_categoryid,recipe_photo,recipe_description) 
  VALUES(name.value,categoryField.value,photoUrl.value,recipeDesk.value)`);//Needs to be updated with the corresponding values fields from the user outputs in the form
  console.log(rows);
  return rows;
}

//Update query to SET new info into the Recipe Table by id - DAN
export async function updateExistingRecipeById()
{
  const [rows] = await pool.query(`UPDATE foodhelperDB.recipes 
  SET name="Recipe name", recipe_photo="UserPhotourl", recipe_description="Updated Desc." 
  WHERE id=id.value`,[id]);//Needs to be updated with the corresponding values fields from the user outputs in the form and the particular id
  console.log(rows);
  return rows;
}

//Delete query from the Recipe Table by id - DAN
export async function deleteExistingRecipeById()
{
  const [rows] = await pool.query(`DELETE FROM recipes 
  WHERE id=id.value`,[id]);//Needs to be updated with the corresponding values field from the user outputs in the form and the particular id
  console.log(rows);
  return rows;
}

//SELECT recipes in the Recipe Table SPECIFIC to the FILTER(recipe name) input by user - DAN
export async function findExistingRecipeByName()
{
  const [rows] = await pool.query(`SELECT name,likes,dislike,recipe_photo,recipe_description,category_name FROM foodhelperDB.recipes
  INNER JOIN recipe_categories ON recipe_categories.id = recipes.recipe_categoryid
  WHERE name = "recipe_name.value"`);//Needs to be updated with the corresponding value field from the user outputs in the form and the particular NAME
  console.log(rows);
  return rows;
}

//SELECT ingredients in the Ingredients Table SPECIFIC to the FILTER input by user - DAN
export async function findExistingIngredientByName()
{
  const [rows] = await pool.query(`SELECT name,calories,price,ingredient_photo FROM foodhelperDB.ingredients
  INNER JOIN ingredient_category ON ingredient_category.id = ingredients.ingredient_category
  WHERE name = "user_ingredient.value"`);//Needs to be updated with the corresponding value field from the user outputs in the form and the particular Ingredient
  console.log(rows);
  return rows;
}


module.exports = { getIngredient, getAllIngredients };

module.exports = {
  getIngredient,
  getAllIngredients,
  getAllRecipes,
  getRecipe,
  getRecipeIngredients,
  getIngredientCategories,
  getRecipeCategories,
  getIngredientCategory,
  getRecipeCategory,
};

