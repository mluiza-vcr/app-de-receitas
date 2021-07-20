import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import shareRecipe from '../images/shareIcon.svg';
import '../Style/BtnCategoriesMain.css';
import '../Style/MealList.css';
// import FoodContext from '../context/FoodContext';

function ReceitasCriadas() {
  const doneRecipes = [
    {
      id: '52771',
      type: 'comida',
      area: 'Italian',
      category: 'Vegetarian',
      alcoholicOrNot: '',
      name: 'Spicy Arrabiata Penne',
      image: 'https://www.themealdb.com/images/media/meals/ustsqw1468250014.jpg',
      doneDate: '23/06/2020',
      tags: ['Pasta', 'Curry'],
    },
    {
      id: '178319',
      type: 'bebida',
      area: '',
      category: 'Cocktail',
      alcoholicOrNot: 'Alcoholic',
      name: 'Aquamarine',
      image: 'https://www.thecocktaildb.com/images/media/drink/zvsre31572902738.jpg',
      doneDate: '23/06/2020',
      tags: [],
    },
  ]; // criado apenas para passar nos reqs 54 em diante, pois a informação salva no
  // localStorage não tenho acesso
  // minha ideia é colocar essa info do localStorage dentro de readyRecipes

  const [readyRecipes, setReadyRecipes] = useState(doneRecipes);
  const [shareButton, setShareButton] = useState(false);

  function renderElements() {
    return (
      readyRecipes.map((readyRecipe, index) => (
        <div key={ index }>
          <Link to={ `/${readyRecipe.type}s/${readyRecipe.id}` } key={ index }>
            <img
              className="meal-card"
              src={ readyRecipe.image }
              data-testid={ `${index}-horizontal-image` }
              alt="imagem horizontal"
              width="100"
            />
            <p data-testid={ `${index}-horizontal-name` }>{readyRecipe.name}</p>
          </Link>

          <p data-testid={ `${index}-horizontal-top-text` }>
            {!readyRecipe.area || readyRecipe.area}
            {' '}
            -
            {' '}
            {readyRecipe.category}
            {' '}
            { !readyRecipe.alcoholicOrNot || readyRecipe.alcoholicOrNot }
          </p>

          <p data-testid={ `${index}-horizontal-done-date` }>{readyRecipe.doneDate}</p>

          <button
            type="button"
            onClick={ () => {
              navigator.clipboard.writeText(`http://localhost:3000/${readyRecipe.type}s/${readyRecipe.id}`);
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

          <p
            data-testid={ `${index}-${readyRecipe.tags[0]}-horizontal-tag` }
            key={ index }
          >
            {readyRecipe.tags[0]}
          </p>
          <p
            data-testid={ `${index}-${readyRecipe.tags[1]}-horizontal-tag` }
            key={ index }
          >
            {readyRecipe.tags[1]}
          </p>
        </div>
      ))
    );
  }

  function btnFood() {
    const filteredMeal = doneRecipes
      .filter((favRecipe) => favRecipe.type === 'comida');
    setReadyRecipes(filteredMeal);
  }

  function btnDrink() {
    const filteredDrink = doneRecipes
      .filter((favRecipe) => favRecipe.type === 'bebida');
    setReadyRecipes(filteredDrink);
  }

  function btnAll() {
    setReadyRecipes(doneRecipes);
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
      { renderElements() }
    </div>
  );
}
export default ReceitasCriadas;
