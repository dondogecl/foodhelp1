import React, { useState } from "react";

function Search() {
  const [ingredients, setIngredients] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleAddIngredient = () => {
    if (inputValue.trim() !== "") {
      setIngredients([...ingredients, inputValue.trim()]);
      setInputValue("");
    }
  };

  const handleDeleteIngredient = (index) => {
    const newIngredients = [...ingredients];
    newIngredients.splice(index, 1);
    setIngredients(newIngredients);
  };

  return (
   <>
    <div className="container mt-4">
      <div>
        <div className="jumbotron">
          <h1 className="display-4">Search for a recipe?</h1>
          <p className="lead">
            Enter the ingredients you have and we will show you the best recipes
            for you. You can also sort them by your preferred criteria.
          </p>
        </div>
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Add ingredient"
            aria-label="Add ingredient"
            aria-describedby="button-addon2"
            value={inputValue}
            onChange={handleInputChange}
          />
          <div className="input-group-append">
            <button
              className="btn btn-outline-secondary"
              type="button"
              id="button-addon2"
              onClick={handleAddIngredient}
            >
              Add
            </button>
          </div>
        </div>
        <div className="mb-3">
          {ingredients.map((ingredient, index) => (
            <div key={index} className="d-flex align-items-center mb-2">
              <div>{ingredient}</div>
              <button
                type="button"
                className="close ml-3"
                aria-label="Delete"
                onClick={() => handleDeleteIngredient(index)}
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
          ))}
        </div>
        <button className="btn btn-primary" type="submit">
          Search
        </button>
      </div>
    </div>
   </>
  );
}

export default Search;
