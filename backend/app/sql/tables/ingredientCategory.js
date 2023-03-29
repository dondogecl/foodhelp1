const sql = require('../../config/database');

async function findAllIngredientCategories() {
  const [rows] = await sql.query(
    `SELECT id, category_name FROM ingredient_category`
  );
  console.log(rows);
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

module.exports = {
  findAllIngredientCategories,
  findIngredientCategoryById,
  findIngredientCategoryByName,
};
