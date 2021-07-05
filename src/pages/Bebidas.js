import React from 'react';
import DrinkList from '../components/DrinkList';
import Header from '../Components/Header';
import SearchBarBtn from '../Components/SearchBarBtn';
import MenuInferior from '../Components/MenuInferior';
// testsea

function Bebidas() {
  return (
    <div className="header-container">
      <Header title="Bebidas" />
      <SearchBarBtn />
      <DrinkList />
      <MenuInferior />
    </div>
  );
}

export default Bebidas;
