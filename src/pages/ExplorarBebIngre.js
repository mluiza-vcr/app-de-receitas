import React from 'react';
import DrinkListExplorerIn from '../components/DrinkListExplorerIn';
import Header from '../components/Header';
import MenuInferior from '../components/MenuInferior';

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
