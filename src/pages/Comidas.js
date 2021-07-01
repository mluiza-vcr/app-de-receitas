import React from 'react';
import MealList from '../components/MealList';
import Header from '../Components/Header';
import SearchBarBtn from '../Components/SearchBarBtn';
import MenuInferior from '../components/MenuInferior';

function Comidas() {
  return (
    <div>
      <h2>Comidas</h2>
      <MealList />
      <Header title="Comidas" />
      <SearchBarBtn />
      <MenuInferior />
     </div>
  );
}

export default Comidas;
