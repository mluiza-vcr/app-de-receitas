import React, { useContext, useEffect } from 'react';
import MealCard from './MealCard';
import '../Style/MealList.css';
import FoodContext from '../context/FoodContext';

function MealList() {
  const {
    meals,
    fetchMeal,
    filterMeal,
    btnToggled,
  } = useContext(FoodContext);

  useEffect(() => {
    fetchMeal();
  }, []);

  if (filterMeal && btnToggled) {
    return (
      <div>
        <MealCard className="meal-card" meals={ filterMeal } />
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
