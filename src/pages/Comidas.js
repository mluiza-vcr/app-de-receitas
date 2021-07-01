import React from 'react';
import Header from '../Components/Header';
import SearchBarBtn from '../Components/SearchBarBtn';
import MenuInferior from '../Components/MenuInferior';

function Comidas() {
  return (
    <div>
      <div className="header-container">
        <Header title="Comidas" />
        <SearchBarBtn />
      </div>
      <MenuInferior />
    </div>
  );
}

export default Comidas;
