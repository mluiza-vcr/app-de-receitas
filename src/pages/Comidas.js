import React from 'react';
import MealList from '../components/MealList';

import ButtonMealCategories from '../components/ButtonMealCategories';

import Header from '../Components/Header';
import SearchBarBtn from '../Components/SearchBarBtn';
import MenuInferior from '../Components/MenuInferior';

function Comidas() {
  return (
    <div className="header-container">
      <Header title="Comidas" />
      <SearchBarBtn />
      <ButtonMealCategories />
      <MealList />
      <MenuInferior />
    </div>
  );
}
export default Comidas;
