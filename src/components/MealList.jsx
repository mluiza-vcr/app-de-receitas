import React, { useContext, useEffect } from 'react';
import MealCard from './MealCard';
import FoodContext from '../context/FoodContext';

function MealList() {
  const { meals, fetchMeal } = useContext(FoodContext);

  useEffect(() => {
    fetchMeal();
  }, []);

  return (
    <div>
      <MealCard meals={ meals } />
    </div>
  );
}

export default MealList;
