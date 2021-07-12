import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import blackHeartIcon from '../images/blackHeartIcon.svg';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';
import shareRecipe from '../images/shareIcon.svg';

function ReceitasFavoritadas() {
  const myStorageFavorite = JSON.parse(localStorage.getItem('favoriteRecipes'));

  const [shareButton, setShareButton] = useState(false);
  const [favorited, setFavorited] = useState('');
  const [favoriteRecipe, setFavoriteRecipe] = useState(myStorageFavorite);

  const clickFavorite = () => {
    //  localStorage('favoriteRecipes', JSON.stringify());

    setFavorited(!favorited);
  };

  function renderElements() {
    return (
      favoriteRecipe.map((favRecipe, index) => (
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
                ? whiteHeartIcon
                : blackHeartIcon }
              alt="favorite-button"
              data-testid={ `${index}-horizontal-favorite-btn` }
            />
          </button>

        </div>
      ))
    );
  }

  function btnFood() {
    const filteredMeal = myStorageFavorite
      .filter((favRecipe) => favRecipe.type === 'comida');
    setFavoriteRecipe(filteredMeal);
  }

  function btnDrink() {
    const filteredDrink = myStorageFavorite
      .filter((favRecipe) => favRecipe.type === 'bebida');
    setFavoriteRecipe(filteredDrink);
  }

  function btnAll() {
    setFavoriteRecipe(myStorageFavorite);
  }

  return (

    <div>
      <button
        data-testid="filter-by-all-btn"
        type="button"
        onClick={ btnAll }
      >
        All
      </button>
      <button
        data-testid="filter-by-food-btn"
        type="button"
        onClick={ btnFood }
      >
        Food
      </button>
      <button
        data-testid="filter-by-drink-btn"
        type="button"
        onClick={ btnDrink }
      >
        Drink
      </button>
      {renderElements()}
    </div>
  );
}

export default ReceitasFavoritadas;
