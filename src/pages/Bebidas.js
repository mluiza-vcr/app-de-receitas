import React from 'react';
import DrinkList from '../components/DrinkList';

import ButtonDrinkCategories from '../components/ButtonDrinkCategories';

import Header from '../Components/Header';
import SearchBarBtn from '../Components/SearchBarBtn';
import MenuInferior from '../Components/MenuInferior';
// testsea

function Bebidas() {
  return (
    <div className="header-container">
      <Header title="Bebidas" />
      <SearchBarBtn />
      <ButtonDrinkCategories />
      <DrinkList />
      <MenuInferior />
    </div>
  );
}

export default Bebidas;
