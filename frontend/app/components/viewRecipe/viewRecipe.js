import React, { useEffect, useState } from "react";
import Axios from "axios";
import ReactMarkdown from "react-markdown";

function ViewRecipe(props) {
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    async function fetchRecipe() {
      try {
        const response = await Axios.get(`/api/getRecipeById/${props.match.params.id}`);
        setRecipe(response.data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchRecipe();
  }, [props.match.params.id]);

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
      <div className="row mt-3">
        <div className="col-md-6">
          <img
            src={getS3PublicUrl(recipe.recipe_photo)}
            className="img-fluid"
            alt="Recipe"
          />
        </div>
        <div className="col-md-6">
          <h5>Ingredients</h5>
          <ul>
            {recipe.ingredients.map((ingredient) => (
              <li key={ingredient.id}>
                {ingredient.quantity} {ingredient.unit} {ingredient.name}
              </li>
            ))}
          </ul>
          <h5>Instructions</h5>
          <ReactMarkdown>{recipe.recipe_description}</ReactMarkdown>
        </div>
      </div>
    </div>
  );
}

export default ViewRecipe;