import React, { useState, useEffect } from "react";
import Axios from "axios";
import AWS from "aws-sdk";
import env from "../env";

// imports of other components

function CreateRecipe() {
  // state variables for the form
  const [name, setName] = useState("");
  const [recipeCategoryid, setRecipeCategoryid] = useState("");
  const [recipePhoto, setRecipePhoto] = useState(null);
  const [recipeDescription, setRecipeDescription] = useState("");
  const [categories, setCategories] = useState([]);

  // handlers for the form
  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleRecipeCategoryChange = (e) => {
    setRecipeCategoryid(e.target.value);
    console.log("recipeCategoryId: ", recipeCategoryid);
  };

  const handleRecipePhotoChange = (e) => {
    setRecipePhoto(e.target.files[0]);
  };

  const handleRecipeDescriptionChange = (e) => {
    setRecipeDescription(e.target.value);
  };

  // handler for the submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    // handle form submission
    try {
      // Upload image to S3
    const s3Params = {
      Bucket: process.env.REACT_APP_S3_BUCKET_NAME,
      Key: recipePhoto.name,
      Body: recipePhoto,
      ContentType: recipePhoto.type,
    };
    const s3Response = await s3.upload(s3Params).promise();
    console.log('Image uploaded to S3:', s3Response.Location);
    photoURL = s3Response.Location;

      const response = await Axios.post("/api/addRecipe", {
        name,
        recipeCategory,
        photoURL,
        recipeDescription,
      });
      console.log(response.data);
      // clear form inputs here
    } catch (error) {
      console.log(error);
      // handle error here
    }
  };

  // recipe categories
  useEffect(() => {
    Axios.get("/api/getAllRecipeCategories")
      .then((response) => {
        setCategories(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  // photos
  const s3 = new AWS.S3({
    accessKeyId: env.REACT_APP_AWS_ACCESS_KEY_ID,
    secretAccessKey: env.REACT_APP_AWS_SECRET_ACCESS_KEY,
    region: env.REACT_APP_AWS_REGION,
  });



  return (
    <div className="container">
      <div className="jumbotron">
        <h1 className="display-4">Post your recipe</h1>
        <hr className="my-4" />
        <p>
          Use the form below to create and publish your recipe. Please specify a
          name and select the ingredients from the list, so it can be found by
          users who want to cook using some of the same ingredients.
        </p>
        <p>
          You can also add your own image of the recipe. If you want to edit or
          delete any recipe posted, you will be able to do it from your profile.
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
          <label htmlFor="recipeCategory">Recipe Category!</label>
          <select
            className="form-control"
            id="recipeCategory"
            value={recipeCategoryid}
            onChange={handleRecipeCategoryChange}
          >
            <option value="">Select a category</option>
            {categories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.category_name}
              </option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="recipeImage">Recipe Image</label>
          <input
            type="file"
            className="form-control-file"
            id="recipeImage"
            onChange={handleRecipePhotoChange}
          />
        </div>

        {/* <div className="form-group">
          <label htmlFor="recipePhoto">Recipe Photo URL</label>
          <input
            type="text"
            className="form-control"
            id="recipePhoto"
            value={recipePhoto}
            onChange={handleRecipePhotoChange}
          />
        </div> */}
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
