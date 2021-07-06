import React from 'react';
// import React, { useContext } from 'react';
import DrinkList from '../components/DrinkList';
// import myContext from '../context/myContext';

import ButtonDrinkCategories from '../components/ButtonDrinkCategories';

import Header from '../Components/Header';
import MenuInferior from '../Components/MenuInferior';
// testsea

function Bebidas() {
//  const { recipesDrinks } = useContext(myContext);
//  const MAX_LENGTH_RECIPES = 12;
//  const recipes = recipesDrinks.slice(0, MAX_LENGTH_RECIPES);

  return (
    <div className="main-container">
      <Header title="Bebidas" />
      <ButtonDrinkCategories />
      {/* recipes.map(({ idDrink, strDrink, strDrinkThumb }, index) => (
        <div key={ idDrink } data-testid={ `${index}-recipe-card` }>
          <img
            src={ strDrinkThumb }
            alt={ strDrink }
            data-testid={ `${index}-card-img` }
          />
          <p data-testid={ `${index}-card-name` }>{ strDrink }</p>
        </div>
      )) */}
      <DrinkList />
      <MenuInferior />
    </div>
  );
}

export default Bebidas;
