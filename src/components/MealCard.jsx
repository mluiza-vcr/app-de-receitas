import React from 'react';
import PropTypes from 'prop-types';
import '../Style/MealList.css';
import { Link } from 'react-router-dom';

function MealCard({ meals }) {
  const maxLength = 12;
  return (
    <div className="meal-list-container">
      {
        meals.slice(0, maxLength).map((meal, index) => (
          <Link to={ `/comidas/${meal.idMeal}` } key={ index }>
            <div
              className="meal-card"
              key={ index }
              data-testid={ `${index}-recipe-card` }
            >
              <span
                data-testid={ `${index}-card-name` }
              >
                {meal.strMeal}
              </span>
              <img
                src={ meal.strMealThumb }
                alt="meal thumb"
                data-testid={ `${index}-card-img` }
              />
            </div>
          </Link>
        ))
      }
    </div>
  );
}

MealCard.propTypes = {
  meals: PropTypes.arrayOf,
}.isRequired;

export default MealCard;
