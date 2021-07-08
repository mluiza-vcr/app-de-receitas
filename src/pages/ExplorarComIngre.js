import React from 'react';
import FoodListExplorerIn from '../Components/FoodListExplorerIn';
import Header from '../Components/Header';
import MenuInferior from '../Components/MenuInferior';

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
