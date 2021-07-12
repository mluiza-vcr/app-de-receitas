import React from 'react';
import ReceitasCriadas from '../components/ReceitasCriadas';
import Header from '../Components/Header';

function ReceitasFavoritas() {
  return (
    <div>
      <Header title="Receitas Favoritas" />
      <ReceitasCriadas />
    </div>
  );
}

export default ReceitasFavoritas;
