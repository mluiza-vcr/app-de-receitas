import React, { useContext, useEffect } from 'react';
import DrinkCard from './DrinkCard';
import FoodContext from '../context/FoodContext';
import RecipesContext from '../context/myContext';

function DrinkList() {
  const { drinks, fetchDrink, filterDrink, btnDrinkToggled } = useContext(FoodContext);

  const { auxRecipesDrinks } = useContext(RecipesContext);

  useEffect(() => {
    fetchDrink();
  }, []);

  if (filterDrink && btnDrinkToggled) {
    return (
      <div>
        <DrinkCard drinks={ filterDrink } />
      </div>
    );
  }

  if (auxRecipesDrinks.length > 0) {
    return (
      <div>
        <DrinkCard drinks={ auxRecipesDrinks } />
      </div>
    );
  }

  return (
    <div>
      <DrinkCard drinks={ drinks } />
    </div>
  );
}

export default DrinkList;
