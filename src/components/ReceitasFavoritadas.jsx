import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import blackHeartIcon from '../images/blackHeartIcon.svg';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';
import shareRecipe from '../images/shareIcon.svg';
import '../Style/BtnCategoriesMain.css';
import '../Style/MealList.css';

function ReceitasFavoritadas() {
  const myStorageFavorite = JSON.parse(localStorage.getItem('favoriteRecipes'));

  const [shareButton, setShareButton] = useState(false);
  const [favorited, setFavorited] = useState('');
  const [favoriteRecipe, setFavoriteRecipe] = useState(myStorageFavorite);

  const checkInList = (myList, id) => myList.some((item) => item.id === id);

  const clickFavorited = (favRecipe) => {
    if (checkInList(myStorageFavorite, favRecipe.id)) {
      const newList = myStorageFavorite.filter((item) => item.id !== favRecipe.id);
      localStorage.setItem('favoriteRecipes', JSON.stringify(newList));
      setFavoriteRecipe(newList);
    } setFavorited(!favorited);
  };

  function renderElements() {
    if (!favoriteRecipe) return null;
    return (
      !favoriteRecipe ? [] : favoriteRecipe.map((favRecipe, index) => (
        <div key={ index }>
          <Link to={ `/${favRecipe.type}s/${favRecipe.id}` } key={ index }>
            <img
              className="meal-card"
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
            onClick={ () => clickFavorited(favRecipe) }
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
      <div className="btn-group-main">
        <button
          className="btns-main"
          data-testid="filter-by-all-btn"
          type="button"
          onClick={ btnAll }
        >
          All
        </button>
        <button
          className="btns-main"
          data-testid="filter-by-food-btn"
          type="button"
          onClick={ btnFood }
        >
          Food
        </button>
        <button
          className="btns-main"
          data-testid="filter-by-drink-btn"
          type="button"
          onClick={ btnDrink }
        >
          Drink
        </button>
      </div>
      {renderElements()}
    </div>
  );
}

export default ReceitasFavoritadas;
