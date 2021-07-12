import React from 'react';
import Header from '../components/Header';
import ReceitasCriadas from '../components/ReceitasCriadas';

function ReceitasFeitas() {
  return (
    <div>
      <Header title="Receitas Feitas" />
      <ReceitasCriadas />
    </div>
  );
}

export default ReceitasFeitas;
