import React, { useState, useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { number, string } from 'prop-types';
import { ingredientAPI } from '../services/SearchDrinksAPI';
import myContext from '../context/myContext';

function DrinkCardExplorerIn({ name, index }) {
  const {
    setRecipesDrinks,
    setAuxRecipesDrinks,
  } = useContext(myContext);
  const { location: { pathname } } = useHistory();
  const [thumbnail, setThumbnail] = useState();
  const location = pathname.split('/')[2];
  const history = useHistory();

  useEffect(() => {
    // loading coloca aqui com setLoading true
    function checkingLocation() {
      if (location === 'bebidas') {
        setThumbnail(`https://www.thecocktaildb.com/images/ingredients/${name}-Small.png`);
      }
    }
    checkingLocation();
    console.log(ingredientAPI(name));
  }, [name, pathname, location]);

  const clickSearchButton = async () => {
    const recipes = await ingredientAPI(name);
    console.log(recipes);
    history.push('/bebidas');
    setAuxRecipesDrinks(recipes);

    //  console.log(recipes);
    setRecipesDrinks(recipes);
  };
  // Qnd clicar no card vai aparecer uma lista de receitas com aquele ingrediente
  return (
    <button type="button" onClick={ clickSearchButton }>
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
    </button>

  );
}

DrinkCardExplorerIn.propTypes = {
  name: string,
  index: number,
};

DrinkCardExplorerIn.defaultProps = {
  name: '',
  index: '',
};
export default DrinkCardExplorerIn;
