import React from 'react';
import ReceitasFavoritadas from '../components/ReceitasFavoritadas';
import Header from '../components/Header';

function ReceitasFavoritas() {
  return (
    <div>
      <Header title="Receitas Favoritas" />
      <ReceitasFavoritadas />
    </div>
  );
}

export default ReceitasFavoritas;
