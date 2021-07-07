import React from 'react';

function ReceitasCriadas() {
  function cardsRendered({cards}) {
    cards.map((card, index) => {
      const {}
    });
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
      {cardsRendered()}
    </div>

  );
}
export default ReceitasCriadas;
