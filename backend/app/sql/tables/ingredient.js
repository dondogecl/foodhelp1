const sql = require('../../config/database');

async function findIngredientById(id) {
  const [[row]] = await sql.query(
    `SELECT i.id, category_name, name, calories, price 
      FROM ingredients i 
      JOIN ingredient_category ic ON i.ingredient_category = ic.id
      WHERE i.id = ?`,
    [id]
  );
  return row;
}

async function findIngredientByName(name) {
  const [[row]] = await sql.query(
    `SELECT i.id, category_name, name, calories, price 
      FROM ingredients i 
      JOIN ingredient_category ic ON i.ingredient_category = ic.id
      WHERE name = ?`,
    [name]
  );
  return row;
}

async function findAllIngredients() {
  const [rows] = await sql.query(
    `SELECT i.id, ingredient_category, name, calories, price, ingredient_category, ingredient_photo
    FROM ingredients i 
    JOIN ingredient_category ic ON i.ingredient_category = ic.id;`
  );
  return rows;
}

async function insertIngredient(ingredient) {
  const { ingredient_category, name, calories, price, ingredient_photo } =
    ingredient;
  const [insert] = await sql.query(
    `INSERT INTO ingredients (ingredient_category, name, calories, price, ingredient_photo)
     VALUES (?, ?, ?, ?, ?)`,
    [ingredient_category, name, calories, price, ingredient_photo]
  );
  return insert;
}

module.exports = {
  findIngredientById,
  findIngredientByName,
  findAllIngredients,
  insertIngredient,
};
