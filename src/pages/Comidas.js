import React, { useContext } from 'react';
import myContext from '../context/myContext';

import MealList from '../components/MealList';
import ButtonMealCategories from '../components/ButtonMealCategories';
import Header from '../Components/Header';
import MenuInferior from '../Components/MenuInferior';
import SearchBarBtn from '../Components/SearchBarBtn';
// import MealCard from '../components/MealCard';

function Comidas() {
  const { auxRecipesFoods } = useContext(myContext);
  // const MAX_LENGTH_RECIPES = 12;
  // const foods = recipesFoods.slice(0, MAX_LENGTH_RECIPES);
  return (
    <div className="main-container">
      <Header title="Comidas" />
      <SearchBarBtn />
      <ButtonMealCategories />
      {/* <MealList /> */}
      {
        !auxRecipesFoods ? <MealList meals={ auxRecipesFoods } /> : <MealList />
      }
      {console.log(auxRecipesFoods)}
      <MenuInferior />
    </div>
  );
}
export default Comidas;
