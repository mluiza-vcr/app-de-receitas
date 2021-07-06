import React from 'react';
import MealList from '../components/MealList';
import ButtonMealCategories from '../components/ButtonMealCategories';
import Header from '../Components/Header';
import SearchBarBtn from '../Components/SearchBarBtn';
import MenuInferior from '../Components/MenuInferior';

function Comidas() {
  return (
    <div>
      <div>
        <Header title="Comidas" />
        <SearchBarBtn />
        <ButtonMealCategories />
        <MealList />
      </div>
      <MenuInferior />
    </div>
  );
}
export default Comidas;
