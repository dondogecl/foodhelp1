import React, { useEffect, useState } from "react";
import Axios from "axios";
import ReactMarkdown from "react-markdown";
import { useParams, useNavigate, Link } from "react-router-dom";

function ViewRecipe() {
  const { id } = useParams(); // get the recipe ID from the URL
  const navigate = useNavigate();
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

  function handleDelete() {
    Axios.delete(`/api/${id}`)
      .then((response) => {
        console.log("Recipe deleted");
        // response
        console.log(response)
        // Go to the home page
        navigate("/");
      })
      .catch((error) => {
        console.error(error);
      });
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
        <div className="d-flex justify-content-between align-items-center mt-3">
        <Link to={`/edit/${recipe.id}`}>
        <button className="btn btn-secondary">Edit</button>
        </Link>
        <button className="btn btn-danger" onClick={() => handleDelete(recipe.id)}>Delete</button>
      </div>
      </div>
    </div>
  );
}

export default ViewRecipe;
