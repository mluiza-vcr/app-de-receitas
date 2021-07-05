import React, { useContext, useEffect } from 'react';
import MealCard from './MealCard';
import FoodContext from '../context/FoodContext';

function MealList() {
  const { meals, fetchMeal, filterMeal, btnToggled } = useContext(FoodContext);

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

  return (
    <div>
      <MealCard meals={ meals } />
    </div>
  );
}

export default MealList;
