const sql = require('../../config/database');

async function insertRecipeItem(recipeItem) {
  const { recipe_id, ingredient_id } = recipeItem;
  const [insert] = await sql.query(
    `INSERT INTO recipe_items (recipe_id, ingredient_id) 
     VALUES(?, ?)`,
    [recipe_id, ingredient_id]
  );
  return insert;
}

module.exports = {
  insertRecipeItem,
};
