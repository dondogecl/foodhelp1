import React from "react";
import { useParams } from 'react-router-dom';

function ViewRecipe() {
    const {id} = useParams();
  return (
    <div>
      <h1>View Recipe</h1>
      <p>Recipe Name: Pasta Carbonara</p>
      <p>Ingredients:</p>
      <ul>
        <li>Spaghetti</li>
        <li>Egg yolks</li>
        <li>Bacon</li>
        <li>Heavy cream</li>
        <li>Parmesan cheese</li>
        <li>Black pepper</li>
      </ul>
      <p>Instructions:</p>
      <ol>
        <li>Cook spaghetti in salted boiling water until al dente.</li>
        <li>Cut bacon into small pieces and fry until crispy.</li>
        <li>In a bowl, whisk egg yolks, heavy cream, Parmesan cheese, and black pepper until combined.</li>
        <li>Drain the spaghetti and add it to the frying pan with the bacon. Toss to combine.</li>
        <li>Remove the pan from the heat and add the egg mixture. Toss to combine.</li>
        <li>Serve hot and enjoy!</li>
      </ol>
      <h2>{id}</h2>
    </div>
  );
}

export default ViewRecipe;
