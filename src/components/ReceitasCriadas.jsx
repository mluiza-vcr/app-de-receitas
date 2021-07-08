import React from 'react';

function ReceitasCriadas() {
  function renderElements(card) {
    const { index, tagName } = card;
    return (
      <div>
        <img
          alt="imagem da receita"
          src=""
          data-testid={ `${index}-horizontal-image` }
        />
        <p data-testid={ `${index}-horizontal-top-text` }>Texto</p>
        <p data-testid={ `${index}-horizontal-name` }>Nome Receita </p>
        <p data-testid={ `${index}-horizontal-done-date` }>Data Receita</p>
        <button
          type="button"
          data-testid={ `${index}-horizontal-share-btn` }
        >
          Share
        </button>
        <p data-testid={ `${index}-${tagName}-horizontal-tag` }>Tags </p>
      </div>
    );
  }
  return (
    <div>
      <button
        data-testid="filter-by-all-btn"
        type="button"
      >
        All
      </button>
      <button
        data-testid="filter-by-food-btn"
        type="button"
      >
        Food
      </button>
      <button
        data-testid="filter-by-drink-btn"
        type="button"
      >
        Drink
      </button>
      {renderElements}
    </div>
  );
}
export default ReceitasCriadas;
