import React, { useState, useEffect } from "react";
import Axios from "axios";

function IngredientsList(props) {
  const [ingredients, setIngredients] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const result = await Axios.get("/api/ingredients");
      setIngredients(result.data);
    }
    fetchData();
  }, []);

  const handleIngredientChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      props.onAddIngredient(value);
    } else {
      props.onRemoveIngredient(value);
    }
  };

  return (
    <div>
      {ingredients.map((ingredient) => (
        <div className="form-check" key={ingredient.id}>
          <input
            type="checkbox"
            className="form-check-input"
            id={`ingredient-${ingredient.id}`}
            value={ingredient.id}
            onChange={handleIngredientChange}
          />
          <label className="form-check-label" htmlFor={`ingredient-${ingredient.id}`}>
            {ingredient.name}
          </label>
        </div>
      ))}
    </div>
  );
}

export default IngredientsList;
