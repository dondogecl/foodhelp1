import React, { useEffect, useState } from "react";
import Axios from "axios";
import ReactMarkdown from "react-markdown";

import { useParams } from "react-router-dom";

function ViewRecipe() {
  const { id } = useParams(); // get the recipe ID from the URL

  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    async function fetchRecipe() {
      try {
        const response = await Axios.get(`/api/getRecipeById/${id}`);
        setRecipe(response.data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchRecipe();
  }, [id]);

  if (!recipe) {
    return <div>Loading...</div>;
  }

  // function to parse s3 urls
  function getS3PublicUrl(s3Url) {
    if (s3Url.split(":")[0] === "https") {
      return s3Url;
    }
    //check 2 first characters
    const urlParts = s3Url.split("/");
    const bucketName = urlParts[2];
    const key = urlParts.slice(3).join("/");
    return `https://${bucketName}.s3.amazonaws.com/${key}`;
  }

  return (
    <div className="container mt-3">
      <h2>{recipe.name}</h2>
      <img
        src={getS3PublicUrl(recipe.recipe_photo)}
        className="img-fluid mt-3 mb-3"
        alt="Recipe"
      />
      <h5>Category: {recipe.category_name}</h5>
      <h5>Ingredients:</h5>
      <ul>
        {recipe.ingredients.map((ingredient) => (
          <li key={ingredient.id}>
            {ingredient.quantity} {ingredient.unit} {ingredient.name} (
            {ingredient.calories} kcal)
          </li>
        ))}
      </ul>
      <h5>Instructions:</h5>
      <ReactMarkdown>{recipe.recipe_description}</ReactMarkdown>
      <div className="mt-3">
        <small className="text-muted">{recipe.likes} likes</small>
      </div>
    </div>
  );
}

export default ViewRecipe;
