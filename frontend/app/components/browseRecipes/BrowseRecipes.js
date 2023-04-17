import React, { useEffect, useState } from "react";
import Axios from "axios";
import ReactMarkdown from 'react-markdown'



function BrowseRecipes() {
  const [recipes, setRecipes] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

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

  // function to parse s3 urls
  function getS3PublicUrl(s3Url) {
    const urlParts = s3Url.split('/');
    const bucketName = urlParts[2];
    const key = urlParts.slice(3).join('/');
    return `https://${bucketName}.s3.amazonaws.com/${key}`;
  }

  // filter recipes based on search query
  const filteredRecipes = recipes.filter((recipe) =>
    recipe.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  
  return (
    <div className="container mt-3">
      <h2>Browse Recipes</h2>
      <div className="row mt-3">
        <div className="col-xl-12 col-lg-10 col-md-12 mb-3">
          <div className="input-group">
            <span className="input-group-text">Filter by Recipe Name:</span>
            <input
              type="text"
              className="form-control "
              placeholder="Type a dish name..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
        </div>
        <div className="row mt-3">
        {filteredRecipes.map((recipe) => (
          <div key={recipe.id} className="col-md-4 mb-3">
            <div className="card h-100">
              <img
                src={getS3PublicUrl(recipe.recipe_photo)}
                className="card-img-top"
                alt="Recipe"
              />
              <div className="card-body">
                <h5 className="card-title">{recipe.name}</h5>
                <h6 className="card-subtitle mb-2 text-muted">
                  {recipe.category_name}
                </h6>
                <div className="card-text">
                  <ReactMarkdown>
                    {recipe.recipe_description.slice(0, 80)}
                  </ReactMarkdown>
                  ...
                </div>
              </div>
              <div className="card-footer">
                <small className="text-muted">
                  <span className="me-2">{recipe.likes} likes</span>
                  <span>
                    {recipe.ingredients.reduce(
                      (acc, i) => acc + i.calories,
                      0
                    )}{" "}
                    kcal
                  </span>
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
