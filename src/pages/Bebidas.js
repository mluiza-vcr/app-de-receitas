import React from 'react';
import DrinkList from '../components/DrinkList';

import ButtonDrinkCategories from '../components/ButtonDrinkCategories';

import Header from '../components/Header';
import MenuInferior from '../components/MenuInferior';
import SearchBarBtn from '../components/SearchBarBtn';

function Bebidas() {
  return (
    <div className="main-container">
      <Header title="Bebidas" />
      <SearchBarBtn />
      <ButtonDrinkCategories />
      <DrinkList />
      <MenuInferior />
    </div>
  );
}

export default Bebidas;
