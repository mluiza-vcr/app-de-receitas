import React, { useState, useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { number, string } from 'prop-types';
import { ingredientAPI } from '../services/SearchFoodsAPI';
import myContext from '../context/myContext';

function FoodCardExplorerIn({ name, index }) {
  const {
    setRecipesFoods,
    setAuxRecipesFoods,
  } = useContext(myContext);
  const { location: { pathname } } = useHistory();
  const [thumbnail, setThumbnail] = useState();
  const location = pathname.split('/')[2];
  const history = useHistory();

  useEffect(() => {
    // loading coloca aqui com setLoading true
    function checkingLocation() {
      if (location === 'comidas') {
        setThumbnail(`https://www.themealdb.com/images/ingredients/${name}-Small.png`);
      }
    }
    checkingLocation();
    console.log(ingredientAPI(name));
    //  mandar p estado filtrado
  }, [name, pathname, location]);

  const clickSearchButton = async () => {
    const recipes = await ingredientAPI(name);
    console.log(recipes);
    history.push('/comidas');
    setAuxRecipesFoods(recipes);

    setRecipesFoods(recipes);
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
