exports.getIngredientCategories = async (req, res, next) => {
  try {
    const result = await sql.getIngredientCategories();
    res.json(result);
  } catch (error) {
    next(error);
  }
};

exports.getIngredientCategory = async (req, res, next) => {
  try {
    const { ingredientId } = req.params;
    if (!ingredientId) {
      res.status(400);
      return next(new Error('ingredientId is invalid'));
    }

    const [result] = await sql.getIngredientCategory(ingredientId);
    res.json(result);
  } catch (error) {
    next(error);
  }
};
