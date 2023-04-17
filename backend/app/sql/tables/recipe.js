const sql = require('../../config/database');

async function findRecipeIngredientsById(id) {
  const [rows] = await sql.query(
    `SELECT ri.id, i.name as ingredient_name, category_name, calories, price
    FROM recipes r
    JOIN recipe_items ri ON r.id = ri.recipe_id
    JOIN ingredients i ON ri.ingredient_id = i.id
    JOIN ingredient_category ic ON i.ingredient_category = ic.id
    WHERE r.id = ?;`,
    [id]
  );
  return rows;
}

async function findAllRecipes() {
  const [rows] = await sql.query(
    `SELECT r.id, r.name, rc.category_name, r.likes, r.dislike, r.recipe_photo, r.recipe_description
    FROM recipes r 
    JOIN recipe_categories rc ON r.recipe_categoryid = rc.id;`
  );
  return rows;
}

async function findRecipeById(id) {
  const [[row]] = await sql.query(
    `SELECT id, name, recipe_categoryid, likes, dislike, recipe_photo, recipe_description 
      FROM recipes 
      WHERE id = ?`,
    [id]
  );
  return row;
}

async function findRecipeByName(name) {
  const [[row]] = await sql.query(
    `SELECT id, name, recipe_categoryid, likes, dislike, recipe_photo, recipe_description 
      FROM recipes 
      WHERE name = ?`,
    [name]
  );
  return row;
}

async function deleteRecipeById(id) {
  const [result] = await sql.query(
    `DELETE FROM recipes 
    WHERE id=?`,
    [id]
  );
  return result.affectedRows > 0;
}

async function insertNewRecipe(recipe) {
  const { name, recipe_categoryid, recipe_photo, recipe_description } = recipe;
  const [insert] = await sql.query(
    `INSERT INTO recipes (name, recipe_categoryid, recipe_photo, recipe_description) 
     VALUES(?, ?, ? , ?)`,
    [name, recipe_categoryid, recipe_photo, recipe_description]
  );
  return insert;
}

module.exports = {
  findRecipeIngredientsById,
  findAllRecipes,
  findRecipeById,
  findRecipeByName,
  insertNewRecipe,
  deleteRecipeById,
};
