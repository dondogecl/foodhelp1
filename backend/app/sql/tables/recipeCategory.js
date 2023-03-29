const sql = require('../../config/database');

async function findAllRecipeCategories() {
  const [rows] = await sql.query(
    `SELECT id, category_name FROM recipe_categories`
  );
  return rows;
}

async function findRecipeCategoryById(id) {
  const [[row]] = await sql.query(
    `SELECT id, category_name 
    FROM recipe_categories WHERE id = ?`,
    [id]
  );
  return row;
}

async function findRecipeCategoryByName(name) {
  const [[row]] = await sql.query(
    `SELECT id, category_name 
    FROM recipe_categories WHERE category_name = ?`,
    [name]
  );
  return row;
}

module.exports = {
  findAllRecipeCategories,
  findRecipeCategoryById,
  findRecipeCategoryByName,
};
