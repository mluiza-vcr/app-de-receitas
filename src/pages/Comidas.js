import React from 'react';
import MealList from '../components/MealList';

import ButtonMealCategories from '../components/ButtonMealCategories';

import Header from '../Components/Header';
import MenuInferior from '../Components/MenuInferior';

function Comidas() {
  return (
    <div className="main-container">
      <Header title="Comidas" />
      <ButtonMealCategories />
      <MealList />
      <MenuInferior />
    </div>
  );
}
export default Comidas;
