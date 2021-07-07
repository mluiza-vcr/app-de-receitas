import React from 'react';
import Header from '../Components/Header';
import MenuInferior from '../Components/MenuInferior';
import SearchBarBtn from '../Components/SearchBarBtn';

function ExplorarComidasAreas() {
  return (
    <div>
      <Header title="Explorar Origem" />
      <SearchBarBtn />
      <MenuInferior />
    </div>
  );
}

export default ExplorarComidasAreas;
