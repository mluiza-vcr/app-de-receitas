import React, { useState, useEffect } from 'react';
import { useHistory, Link } from 'react-router-dom';
import { number, string } from 'prop-types';
import { ingredientAPI } from '../services/SearchFoodsAPI';
// import RecipesContext from '../context/RecipesProvider';

function FoodCardExplorerIn({ name, index }) {
  const { location: { pathname } } = useHistory();
  const [thumbnail, setThumbnail] = useState();
  const location = pathname.split('/')[2];

  useEffect(() => {
    function checkingLocation() {
      if (location === 'comidas') {
        setThumbnail(`https://www.themealdb.com/images/ingredients/${name}-Small.png`);
      }
    }
    // searchIngredients();
    checkingLocation();
    console.log(ingredientAPI(name));
  }, [name, pathname, location]);

  const clickToRecipe = () => {
    ingredientAPI(name);
  };
  // Qnd clicar no card vai aparecer uma lista de receitas com aquele ingrediente
  return (
    <Link to={ `/${name}` } onClick={ clickToRecipe }>
      <div>
        <div data-testid={ `${index}-ingredient-card` }>
          <h2 data-testid={ `${index}-card-name` }>{name}</h2>
          <img
            src={ thumbnail }
            alt={ `foto do ingrediente ${name}` }
            data-testid={ `${index}-card-img` }
          />
        </div>
      </div>
    </Link>

  );
}

FoodCardExplorerIn.propTypes = {
  name: string,
  index: number,
};

FoodCardExplorerIn.defaultProps = {
  name: '',
  index: '',
};
export default FoodCardExplorerIn;
// SPLIT- Divide uma tring em uma lista ordenada https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/split
