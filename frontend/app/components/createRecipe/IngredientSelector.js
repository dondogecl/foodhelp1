import React, { useState, useEffect } from "react";
import axios from "axios";

function IngredientSelector() {
  const [allIngredients, setAllIngredients] = useState([]);
  const [filteredIngredients, setFilteredIngredients] = useState([]);
  const [selectedIngredients, setSelectedIngredients] = useState([]);
  const [selectedIngredient, setSelectedIngredient] = useState("");

  // ingredients have the fields:
  // id, name, ingredient_category, description, calories, price, ingredient_photo, ingredient_description

  useEffect(() => {
    const fetchIngredients = async () => {
      const response = await axios.get("/api/getAllIngredients");
      setAllIngredients(response.data);
      setFilteredIngredients(response.data);
    };
    fetchIngredients();
  }, []);

  const handleInputChange = (e) => {
    const query = e.target.value.toLowerCase();
    const filtered = allIngredients.filter((i) =>
      i.name.toLowerCase().includes(query)
    );
    setFilteredIngredients(filtered);
  };

  const handleSelect = (e) => {
    setSelectedIngredient(e.target.value);
  };

  const handleAdd = () => {
    const ingredient = allIngredients.find((i) => i.name === selectedIngredient);
    if (ingredient) {
      setSelectedIngredients([...selectedIngredients, ingredient]);
      setSelectedIngredient("");
    }
  };

  const handleDelete = (ingredient) => {
    const updatedIngredients = selectedIngredients.filter(
      (i) => i.id !== ingredient.id
    );
    setSelectedIngredients(updatedIngredients);
  };

  return (
    <div>
      <select value={selectedIngredient} onChange={handleSelect}>
        <option value="">Select an ingredient</option>
        {filteredIngredients.map((i) => (
          <option key={i.id} value={i.name}>
            {i.name}
          </option>
        ))}
      </select>
      <button onClick={handleAdd}>Add</button>
      <div>
        <p>Selected ingredients:</p>
        {selectedIngredients.map((i) => (
          <div key={i.id}>
            {i.name}{" "}
            <button onClick={() => handleDelete(i)}>X</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default IngredientSelector;
