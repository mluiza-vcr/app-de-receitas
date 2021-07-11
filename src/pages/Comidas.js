import React from 'react';

import MealList from '../components/MealList';
import ButtonMealCategories from '../components/ButtonMealCategories';
import Header from '../components/Header';
import '../Style/BtnCategories.css';
import MenuInferior from '../components/MenuInferior';
import SearchBarBtn from '../components/SearchBarBtn';

function Comidas() {
  return (
    <div className="main-container">
      <Header title="Comidas" />
      <SearchBarBtn />
      <ButtonMealCategories />
      <MealList />
      <MenuInferior />
    </div>
  );
}
export default Comidas;
