import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import myContext from '../context/myContext';

function MealCard({ meals }) {
  const maxLength = 12;
  const { recipesFoods } = useContext(myContext);
  const MAX_LENGTH_RECIPES = 12;
  const foods = recipesFoods.slice(0, MAX_LENGTH_RECIPES);
  return (
    <div>
      {
        meals ? meals.slice(0, maxLength).map((meal, index) => (
          <Link to={ `/comidas/${meal.idMeal}` } key={ index }>
            <div
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
                width="40"
              />
            </div>
          </Link>
        ))
          : foods.map(({ idMeal, strMeal, strMealThumb }, index) => (
            <div key={ idMeal } data-testid={ `${index}-recipe-card` }>
              <img
                src={ strMealThumb }
                alt={ strMeal }
                data-testid={ `${index}-card-img` }
              />
              <p data-testid={ `${index}-card-name` }>{ strMeal }</p>
            </div>
          ))
      }
    </div>
  );
}

MealCard.propTypes = {
  meals: PropTypes.arrayOf,
}.isRequired;

export default MealCard;
