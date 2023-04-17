import React, { useEffect, useState } from "react";
import Axios from "axios";

function BrowseRecipes() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    async function fetchRecipes() {
      try {
        const response = await Axios.get("/api/getAllRecipes");
        setRecipes(response.data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchRecipes();
  }, []);

  return (
    <div className="container mt-3">
      <h2>Browse Recipes</h2>
      <div className="row mt-3">
        {recipes.map(recipe => (
          <div key={recipe.id} className="col-md-4 mb-3">
            <div className="card h-100">
              <img src={recipe.recipe_photo} className="card-img-top" alt="Recipe" />
              <div className="card-body">
                <h5 className="card-title">{recipe.name}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{recipe.category_name}</h6>
                <p className="card-text">{recipe.recipe_description.slice(0,60)}</p>
              </div>
              <div className="card-footer">
                <small className="text-muted">
                  <span className="me-2">{recipe.likes} likes</span>
                  <span>{recipe.ingredients.reduce((acc, i) => acc + i.calories, 0)} kcal</span>
                </small>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BrowseRecipes;
