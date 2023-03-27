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

//Create query to INSERT  new recipes into the Recipe Table - DAN
export async function insertNewRecipe(
  name,
  recipe_categoryid,
  recipe_photo,
  recipe_description
) {
  const result = await pool.query(
    `INSERT INTO foodhelperDB.recipes (name,recipe_categoryid,recipe_photo,recipe_description) 
  VALUES(name.value,categoryField.value,photoUrl.value,recipeDesk.value)`,
    [name, recipe_categoryid, recipe_photo, recipe_description]
  ); //Needs to be updated with the corresponding values fields from the user outputs in the form
  return result;
}

module.exports = { insertIngredient, insertNewRecipe };
