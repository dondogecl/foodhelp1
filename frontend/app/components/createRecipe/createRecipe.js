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
