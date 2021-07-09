import React from 'react';
import DrinkListExplorerIn from '../Components/DrinkListExplorerIn';
import Header from '../Components/Header';
import MenuInferior from '../Components/MenuInferior';

function ExplorarBebIngre() {
  return (
    <div>
      <Header title="Explorar Ingredientes" />
      <DrinkListExplorerIn />
      <MenuInferior />

    </div>
  );
}

export default ExplorarBebIngre;
