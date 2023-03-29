import React, { useState } from "react";
import Axios from "axios";

// imports of other components

function CreateRecipe() {
  // state variables for the form
  const [name, setName] = useState("");
  const [recipeCategory, setRecipeCategory] = useState("");
  const [recipePhoto, setRecipePhoto] = useState("");
  const [recipeDescription, setRecipeDescription] = useState("");

  // handlers for the form
  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleRecipeCategoryChange = (e) => {
    setRecipeCategory(e.target.value);
  };

  const handleRecipePhotoChange = (e) => {
    setRecipePhoto(e.target.value);
  };

  const handleRecipeDescriptionChange = (e) => {
    setRecipeDescription(e.target.value);
  };

  // handler for the submit
  const handleSubmit = (e) => {
    e.preventDefault();
    // handle form submission
  };

  return (
    <div className="container">
      <div className="jumbotron">
        <h1 className="display-4">Post your recipe</h1>
        <hr className="my-4" />
        <p>Use the form below to create and publish your recipe. Please specify a name and select the ingredients from the list, so it can be found by users who want to cook using some of
          the same ingredients.
        </p>
        <p>
          You can also add your own image of the recipe. If you want to edit or delete any recipe posted, you will be able to do it from your profile.
        </p>
      </div>
      
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Recipe Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            value={name}
            onChange={handleNameChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="recipeCategory">Recipe Category</label>
          <input
            type="text"
            className="form-control"
            id="recipeCategory"
            value={recipeCategory}
            onChange={handleRecipeCategoryChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="recipePhoto">Recipe Photo URL</label>
          <input
            type="text"
            className="form-control"
            id="recipePhoto"
            value={recipePhoto}
            onChange={handleRecipePhotoChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="recipeDescription">Recipe Description</label>
          <textarea
            className="form-control"
            id="recipeDescription"
            rows="10"
            value={recipeDescription}
            onChange={handleRecipeDescriptionChange}
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

export default CreateRecipe;
