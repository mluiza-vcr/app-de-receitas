import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { number, string } from 'prop-types';

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
    checkingLocation();
  }, [name, pathname, location]);

  return (
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
