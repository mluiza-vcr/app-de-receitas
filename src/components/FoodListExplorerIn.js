import React, { useState, useEffect } from 'react';
import FoodCardExplorerIn from './FoodCardExplorerIn';
import fetchFoodIngredients from '../services/fetchFoodIngredientsAPI';

function FoodListExplorerIn() {
  const [ingredientsList, setIngredientsList] = useState([]);
  const [id] = useState('idIngredient');
  const [name] = useState('strIngredient');
  const maxNumber = 11;

  useEffect(() => {
    async function fetchIngredients() {
      const data = await fetchFoodIngredients();
      setIngredientsList(data);
    }
    fetchIngredients();
  }, []);

  console.log(ingredientsList);
  return (
    <div>
      { (ingredientsList !== null
      && ingredientsList.length > 0) && ingredientsList.map((ingredient, index) => {
        if (index <= maxNumber) {
          return (
            <FoodCardExplorerIn
              key={ ingredient[id] }
              name={ ingredient[name] }
              index={ index }
            />
          );
        }
        return null;
      }) }
    </div>
  );
}

export default FoodListExplorerIn;
