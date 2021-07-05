import React from 'react';
import PropTypes from 'prop-types';

function DrinkCard({ drinks }) {
  const maxLength = 12;
  return (
    <div>
      {
        drinks.slice(0, maxLength).map((drink, index) => (
          <div
            key={ index }
            data-testid={ `${index}-recipe-card` }
          >
            <span
              data-testid={ `${index}-card-name` }
            >
              {drink.strDrink}
            </span>
            <img
              src={ drink.strDrinkThumb }
              alt="drink thumb"
              data-testid={ `${index}-card-img` }
              width="70"
            />
          </div>
        ))
      }
    </div>
  );
}

DrinkCard.propTypes = {
  drinks: PropTypes.arrayOf,
}.isRequired;

export default DrinkCard;
