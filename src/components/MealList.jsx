import React, { useContext, useEffect } from 'react';
import MealCard from './MealCard';
import '../Style/MealList.css';
import FoodContext from '../context/FoodContext';
import RecipesContext from '../context/myContext';

function MealList() {
  const {
    meals,
    fetchMeal,
    filterMeal,
    btnToggled,
  } = useContext(FoodContext);

  const { auxRecipesFoods } = useContext(RecipesContext);

  useEffect(() => {
    fetchMeal();
  }, []);

  if (filterMeal && btnToggled) {
    return (
      <div>
        <MealCard meals={ filterMeal } />
      </div>
    );
  }
  if (auxRecipesFoods.length > 0) {
    return (
      <div>
        <MealCard meals={ auxRecipesFoods } />
      </div>
    );
  }

  return (
    <div>
      <MealCard meals={ meals } />
    </div>
  );
}

export default MealList;
