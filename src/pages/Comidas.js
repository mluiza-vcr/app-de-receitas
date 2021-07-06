import React from 'react';
// import React, { useContext } from 'react';
// import myContext from '../context/myContext';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import myContext from '../context/myContext';
import MealList from '../components/MealList';

import ButtonMealCategories from '../components/ButtonMealCategories';
import MealList from '../components/MealList';
import Header from '../Components/Header';
import MenuInferior from '../Components/MenuInferior';

function Comidas() {
  // const { recipesFoods } = useContext(myContext);
  // const MAX_LENGTH_RECIPES = 12;
  // const foods = recipesFoods.slice(0, MAX_LENGTH_RECIPES);
  return (
    <div className="main-container">
      <Header title="Comidas" />
      <ButtonMealCategories />
      <MealList />
      {/* foods.map(({ idMeal, strMeal, strMealThumb }, index) => (
        <div key={ idMeal } data-testid={ `${index}-recipe-card` }>
          <img src={ strMealThumb } alt={ strMeal } data-testid={ `${index}-card-img` } />
          <p data-testid={ `${index}-card-name` }>{ strMeal }</p>
        </div>
      )) */}
      <MenuInferior />
    </div>
  );
}
export default Comidas;
