export async function getIngredient(id) {
  const [rows] = await pool.query(
    `SELECT i.id, category_name, name, calories, price 
      FROM ingredients i 
      JOIN ingredient_category ic ON i.ingredient_category = ic.id
      WHERE i.id = ?`,
    [id]
  );
  /* NOTE: This always return an array. Since the query will only
    return one element in an array, he is a better practice to just
    return the first element through index. */
  console.log(rows[0]);
  return rows[0];
}

export async function getAllIngredients() {
  const [rows] = await pool.query(
    `SELECT i.id, category_name, name, calories, price 
    FROM ingredients i 
    JOIN ingredient_category ic ON i.ingredient_category = ic.id;`
  );
  console.log(rows);
  return rows;
}

export async function getAllRecipes() {
  // Fill
}

export async function getRecipe(id) {
  // Fill
}

export async function getRecipeIngredients() {
  // Fill
}

export async function getIngredientCategories() {
  // Fill;
}

export async function getIngredientCategory(id) {
  // Fill
}

export async function getRecipeCategories() {
  // Fill
}

export async function getRecipeCategory(id) {
  // Fill
}
