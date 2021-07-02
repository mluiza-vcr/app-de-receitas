import React from 'react';
import DrinkList from '../components/DrinkList';
import Header from '../Components/Header';
import SearchBarBtn from '../Components/SearchBarBtn';
import MenuInferior from '../Components/MenuInferior';
// testsea

function Bebidas() {
  return (
    <div>
      <h2>Bebidas</h2>
      <DrinkList />
      <Header title="Bebidas" />
      <SearchBarBtn />
      <MenuInferior />
    </div>
  );
}

export default Bebidas;
