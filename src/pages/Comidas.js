import React from 'react';
// import React, { useContext } from 'react';
// import myContext from '../context/myContext';
// import { Link } from 'react-router-dom';
// import myContext from '../context/myContext';

import MealList from '../components/MealList';
import ButtonMealCategories from '../components/ButtonMealCategories';
import Header from '../Components/Header';
import MenuInferior from '../Components/MenuInferior';
// import MealHeaderCard from '../components/MealHeaderCard';

function Comidas() {
  // const { recipesFoods } = useContext(myContext);
  // const MAX_LENGTH_RECIPES = 12;
  // const foods = recipesFoods.slice(0, MAX_LENGTH_RECIPES);
  return (
    <div className="main-container">
      <Header title="Comidas" />
      <ButtonMealCategories />
      <MealList />
      {/* <MealHeaderCard /> */}
      <MenuInferior />
    </div>
  );
}
export default Comidas;
