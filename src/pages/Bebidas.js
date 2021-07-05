import React from 'react';
import DrinkList from '../components/DrinkList';
import ButtonDrinkCategories from '../components/ButtonDrinkCategories';

function Bebidas() {
  return (
    <div>
      <h2>Bebidas</h2>
      <ButtonDrinkCategories />
      <DrinkList />
    </div>
  );
}

export default Bebidas;
