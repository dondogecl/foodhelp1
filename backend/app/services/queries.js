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
  // Fill
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

module.exports = { getIngredient, getAllIngredients };
