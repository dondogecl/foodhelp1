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

async function insertRecipeCategory(recipeCategory) {
  const { category_name } = recipeCategory;
  const [insert] = await sql.query(
    `INSERT INTO recipe_categories (category_name)
     VALUES (?)`,
    [category_name]
  );
  return insert;
}

module.exports = {
  findAllRecipeCategories,
  findRecipeCategoryById,
  findRecipeCategoryByName,
  insertRecipeCategory,
};
