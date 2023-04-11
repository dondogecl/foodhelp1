import React, { useState } from "react";

function Search() {
  const [ingredients, setIngredients] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [cuisineValue, setCuisineValue] = useState("");
  const [occasionValue, setOccasionValue] = useState("");
  const [mealValue, setMealValue] = useState("");

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

  const handleCuisinesChange = (e) => {
    setCuisineValue(e.target.value);
  };

  const handleOccasionsChange = (e) => {
    setOccasionValue(e.target.value);
  };

  const handleMealsChange = (e) => {
    setMealValue(e.target.value);
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
          <hr />
          <div className="form-group">
            <label htmlFor="cuisinesSelect">Cuisines</label>
            <select className="form-control" id="cuisinesSelect" onChange={handleCuisinesChange} value={cuisineValue}>
              <option value="">Choose...</option>
              <option value="1">Mexican</option>
              <option value="2">Italian</option>
              <option value="3">Chinese</option>
              <option value="4">Indian</option>
              <option value="5">Greek</option>
              <option value="6">Japanese</option>
              <option value="7">Caribbean</option>
              <option value="10">View All</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="occasionsSelect">Occasions</label>
            <select className="form-control" id="occasionsSelect" onChange={handleOccasionsChange} value={occasionValue}>
              <option value="">Choose...</option>
              <option value="1">Passover</option>
              <option value="2">Ramadan</option>
              <option value="3">Mother's Day</option>
              <option value="4">Valentine's Day</option>
              <option value="10">View All</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="mealsSelect">Meals</label>
            <select className="form-control" id="mealsSelect" onChange={handleMealsChange} value={mealValue}>
              <option value="">Choose...</option>
              <option value="1">Appetizers</option>
              <option value="2">Breakfast</option>
              <option value="3">Lunch</option>
              <option value="4">Healthy</option>
              <option value="5">Soups</option>
              <option value="10">View All</option>
            </select>
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
