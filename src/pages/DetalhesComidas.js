import React from 'react';

function DetalhesComidas() {
  return (
    <div>
      <img data-testid="recipe-photo" src="" alt="" />
      <h2 data-testid="recipe-title">Titulo da receita</h2>
      <button type="button" data-testid="share-btn">Share</button>
      <button type="button" data-testid="favorite-btn">Favoritar</button>
      <p data-testid="recipe-category">Texto da categoria</p>
      <p>ingredientes</p>
      <p data-testid="instructions">Texto de instrucoes</p>
      <iframe data-testid="video" src="https://www.youtube.com/embed/XxqA_vomQFI" title="description" />
      <p>Card de receitas recomendadas</p>
      <button type="button" data-testid="start-recipe-btn">Iniciar receita</button>
    </div>
  );
}

export default DetalhesComidas;
