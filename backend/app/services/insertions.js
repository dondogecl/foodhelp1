const pool = require('../config/database');

async function insertIngredient(
  ingredient_category,
  name,
  calories,
  price,
  ingredient_photo
) {
  const result = await pool.query(
    `INSERT INTO ingredients (ingredient_category, name, calories, price, ingredient_photo)
     VALUES (?, ?, ?, ?, ?)`,
    [ingredient_category, name, calories, price, ingredient_photo]
  );
  return result;
}

module.exports = { insertIngredient };
