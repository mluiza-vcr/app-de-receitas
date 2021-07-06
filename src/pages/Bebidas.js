import React from 'react';
import DrinkList from '../components/DrinkList';

import ButtonDrinkCategories from '../components/ButtonDrinkCategories';

import Header from '../Components/Header';
import MenuInferior from '../Components/MenuInferior';
// testsea

function Bebidas() {
  return (
    <div className="main-container">
      <Header title="Bebidas" />
      <ButtonDrinkCategories />
      <DrinkList />
      <MenuInferior />
    </div>
  );
}

export default Bebidas;
