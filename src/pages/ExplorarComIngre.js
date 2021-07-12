import React from 'react';
import FoodListExplorerIn from '../components/FoodListExplorerIn';
import Header from '../components/Header';
import MenuInferior from '../components/MenuInferior';

function ExplorarComIngre() {
  return (
    <div>
      <Header title="Explorar Ingredientes" />
      <FoodListExplorerIn />
      <MenuInferior />
    </div>
  );
}

export default ExplorarComIngre;
