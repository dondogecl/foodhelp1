const sql = require('../../config/database');

async function findAllIngredientCategories() {
  const [rows] = await sql.query(
    `SELECT id, category_name FROM ingredient_category`
  );
  return rows;
}

async function findIngredientCategoryById(id) {
  const [[row]] = await sql.query(
    `SELECT id, category_name 
    FROM ingredient_category WHERE id = ?`,
    [id]
  );
  return row;
}

async function findIngredientCategoryByName(name) {
  const [[row]] = await sql.query(
    `SELECT id, category_name 
    FROM ingredient_category WHERE category_name = ?`,
    [name]
  );
  return row;
}

async function insertIngredientCategory(ingredientCategory) {
  const { category_name } = ingredientCategory;
  const [insert] = await sql.query(
    `INSERT INTO ingredient_category (category_name)
     VALUES (?)`,
    [category_name]
  );
  return insert;
}

module.exports = {
  findAllIngredientCategories,
  findIngredientCategoryById,
  findIngredientCategoryByName,
  insertIngredientCategory,
};
