import React from 'react';
import { Link } from 'react-router-dom';

function MenuInferior() {
  return (
    <footer data-testid="footer">
      <Link to="/bebidas">
        <button
          type="button"
          data-testid="drinks-bottom-btn"
        >
          pagina de drinks
        </button>
      </Link>
      <Link to="/explorar">
        <button
          type="button"
          data-testid="explore-bottom-btn"
        >
          Explorar
        </button>
      </Link>
      <Link to="/comidas">
        <button
          type="button"
          data-testid="food-bottom-btn"
        >
          Pagina de comidas
        </button>
      </Link>
    </footer>
  );
}

export default MenuInferior;
