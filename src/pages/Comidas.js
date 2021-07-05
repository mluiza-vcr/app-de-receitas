import React from 'react';
import MealList from '../components/MealList';
import ButtonMealCategories from '../components/ButtonMealCategories';

function Comidas() {
  return (
    <div>
      <h2>Comidas</h2>
      <ButtonMealCategories />
      <MealList />
    </div>
  );
}

export default Comidas;
