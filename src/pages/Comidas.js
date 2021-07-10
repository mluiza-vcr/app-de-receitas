import React from 'react';

import MealList from '../components/MealList';
import ButtonMealCategories from '../components/ButtonMealCategories';
import Header from '../Components/Header';
import '../Style/BtnCategories.css';
import MenuInferior from '../Components/MenuInferior';
import SearchBarBtn from '../Components/SearchBarBtn';

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
