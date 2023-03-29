const pool = require('../../config/database');

//Create query to INSERT  new recipes into the Recipe Table - DAN
async function insertNewRecipe(
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

module.exports = { insertNewRecipe };
