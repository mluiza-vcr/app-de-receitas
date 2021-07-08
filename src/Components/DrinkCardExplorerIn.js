import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { number, string } from 'prop-types';

function DrinkCardExplorerIn({ name, index }) {
  const { location: { pathname } } = useHistory();
  const [thumbnail, setThumbnail] = useState();
  const location = pathname.split('/')[2];

  useEffect(() => {
    function checkingLocation() {
      if (location === 'bebidas') {
        setThumbnail(`https://www.thecocktaildb.com/images/ingredients/${name}-Small.png`);
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

DrinkCardExplorerIn.propTypes = {
  name: string,
  index: number,
};

DrinkCardExplorerIn.defaultProps = {
  name: '',
  index: '',
};
export default DrinkCardExplorerIn;