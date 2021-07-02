import React from 'react';
import MealList from '../components/MealList';
import Header from '../Components/Header';
import SearchBarBtn from '../Components/SearchBarBtn';
import MenuInferior from '../Components/MenuInferior';

function Comidas() {
  return (
    <div>
      <div className="header-container">
        <Header title="Comidas" />
        <SearchBarBtn />
        <MealList />
      </div>
      <MenuInferior />
    </div>
  );
}
export default Comidas;
