import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import blackHeartIcon from '../images/blackHeartIcon.svg';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';
import shareRecipe from '../images/shareIcon.svg';

function ReceitasFavoritadas() {
  const favoriteRecipes = [
    {
      id: '52771',
      type: 'comida',
      area: 'Italian',
      category: 'Vegetarian',
      alcoholicOrNot: '',
      name: 'Spicy Arrabiata Penne',
      image: 'https://www.themealdb.com/images/media/meals/ustsqw1468250014.jpg',
    },
    {
      id: '178319',
      type: 'bebida',
      area: '',
      category: 'Cocktail',
      alcoholicOrNot: 'Alcoholic',
      name: 'Aquamarine',
      image: 'https://www.thecocktaildb.com/images/media/drink/zvsre31572902738.jpg',
    },
  ];

  const [shareButton, setShareButton] = useState(false);
  const [favorited, setFavorited] = useState('');

  const clickFavorite = () => {
    setFavorited(!favorited);
  };

  function renderElements() {
    return (
      favoriteRecipes.map((favRecipe, index) => (
        <div key={ index }>
          <Link to={ `/${favRecipe.type}s/${favRecipe.id}` } key={ index }>
            <img
              src={ favRecipe.image }
              data-testid={ `${index}-horizontal-image` }
              alt="imagem horizontal"
              width="100"
            />
            <p data-testid={ `${index}-horizontal-name` }>{favRecipe.name}</p>
          </Link>

          <p data-testid={ `${index}-horizontal-top-text` }>
            {!favRecipe.area || favRecipe.area}
            {' '}
            -
            {' '}
            {favRecipe.category}
            {' '}
            { !favRecipe.alcoholicOrNot || favRecipe.alcoholicOrNot }
          </p>

          <button
            type="button"
            onClick={ () => {
              navigator.clipboard.writeText(`http://localhost:3000/${favRecipe.type}s/${favRecipe.id}`);
              setShareButton(!shareButton);
            } }
          >
            <img
              data-testid={ `${index}-horizontal-share-btn` }
              src={ shareRecipe }
              alt="btn-share"
            />
          </button>
          {shareButton ? <span>Link copiado!</span> : null}

          <button
            type="button"
            onClick={ clickFavorite }
          >
            <img
              src={ favorited
                ? blackHeartIcon
                : whiteHeartIcon }
              alt="favorite-button"
              data-testid={ `${index}-horizontal-favorite-btn` }
            />
          </button>

        </div>
      ))
    );
  }

  return (

    <div>
      <button
        data-testid="filter-by-all-btn"
        type="button"
      >
        All
      </button>
      <button
        data-testid="filter-by-food-btn"
        type="button"
      >
        Food
      </button>
      <button
        data-testid="filter-by-drink-btn"
        type="button"
      >
        Drink
      </button>
      {renderElements()}
    </div>
  );
}

export default ReceitasFavoritadas;
