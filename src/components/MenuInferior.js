import React from 'react';
import { Link } from 'react-router-dom';
import './MenuInferior.css';
import drinkIcon from '../images/drinkIcon.svg';
import exploreIcon from '../images/exploreIcon.svg';
import mealIcon from '../images/mealIcon.svg';

function MenuInferior() {
  return (
    <footer data-testid="footer">
      <Link to="/bebidas">
        <button
          type="button"
          data-testid="drinks-bottom-btn"
        >
          <img src={ drinkIcon } alt="icone-bebidas" />
        </button>
      </Link>
      <Link to="/explorar">
        <button
          type="button"
          data-testid="explore-bottom-btn"
        >
          <img src={ exploreIcon } alt="explorar" />
        </button>
      </Link>
      <Link to="/comidas">
        <button
          type="button"
          data-testid="food-bottom-btn"
        >
          <img src={ mealIcon } alt="pagina de comidas" />
        </button>
      </Link>
    </footer>
  );
}

export default MenuInferior;
