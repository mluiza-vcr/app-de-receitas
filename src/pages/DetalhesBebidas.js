import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import '../Style/PagesDetails.css';
import getIngredientList from '../services/getIngredients';
import blackHeartIcon from '../images/blackHeartIcon.svg';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';
import shareIcon from '../images/shareIcon.svg';

function DetalhesBebidas() {
  const [recipes, setRecipes] = useState({});
  const [ingredients, setIngredients] = useState([]);
  const [recomendation, setRecomendation] = useState([]);

  const [shareButton, setShareButton] = useState(false);
  const [favorited, setFavorited] = useState('');
  const [inProgress, setInProgress] = useState('');
  const [done, setDone] = useState('');

  const history = useHistory();

  const { location: { pathname } } = useHistory();
  const splitPathName = pathname.split('/');
  const idDrink = splitPathName[2];

  const fetchDrinksAPI = async () => {
    const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idDrink}`);
    const recipe = await response.json();
    setRecipes(recipe.drinks[0]);
  };

  const checkInList = (myList, id) => myList.some((item) => item.id === id);

  const checkDoneButton = () => {
    const myDoneList = (JSON.parse(localStorage.getItem('doneRecipes'))
      ? JSON.parse(localStorage.getItem('doneRecipes')) : []);
    setDone(checkInList(myDoneList, idDrink));
  };

  const checkInProgress = () => {
    const myProgress = JSON.parse(localStorage.getItem('inProgressRecipes'));
    if (myProgress) {
      setInProgress(Object.keys(myProgress.drinks).includes(idDrink));
    }
  };

  const clickFavorite = () => {
    setFavorited(!favorited);
  };

  const clickShare = () => {
    navigator.clipboard.writeText(`http://localhost:3000${pathname}`);
    setShareButton(!shareButton);
  };

  const fetchRecomendation = async () => {
    const MAX_RECOMENDATION = 6;
    const response = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=');
    const json = await response.json();
    const recommend = json.meals;
    setRecomendation(recommend.slice(0, MAX_RECOMENDATION));
  };

  const clickStartButton = () => {
    history.push(`/bebidas/${idDrink}/in-progress`);
  };

  useEffect(() => {
    fetchDrinksAPI();
    fetchRecomendation();
  }, []);

  useEffect(() => {
    checkDoneButton();
    checkInProgress();
  });

  useEffect(() => {
    setIngredients(getIngredientList(recipes));
  }, [recipes]);

  const {
    strDrinkThumb,
    strDrink,
    strAlcoholic,
    strInstructions,
  } = recipes;

  return (
    <div>
      <img data-testid="recipe-photo" width="350" src={ strDrinkThumb } alt="" />
      <h2 data-testid="recipe-title">{strDrink}</h2>
      <button
        type="button"
        data-testid="share-btn"
        onClick={ clickShare }
      >
        <img src={ shareIcon } alt="share-button" />
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
          data-testid="favorite-btn"
        />
      </button>
      <p data-testid="recipe-category">{strAlcoholic}</p>
      <ul>
        <h1>Ingredientes</h1>
        {ingredients.map(({ ingredient, amount }, index) => (
          <li
            key={ index }
            data-testid={ `${index}-ingredient-name-and-measure` }
          >
            {`${ingredient} - ${amount}`}
          </li>
        ))}
      </ul>
      <h3>Instruções</h3>
      <section data-testid="instructions">
        <p>{strInstructions}</p>
      </section>
      <h3>Pratos que combinam com este drink</h3>
      <div className="recomentadion-container">
        {recomendation.map(({ strMealThumb, strMeal, strCategory }, index) => (
          <div
            className="recommended-card"
            key={ strMeal }
            data-testid={ `${index}-recomendation-card` }
          >
            <img src={ strMealThumb } alt={ strMeal } />
            <p>{strCategory}</p>
            <p data-testid={ `${index}-recomendation-title` }>{strMeal}</p>
          </div>
        ))}
      </div>
      {done ? null : (
        <button
          className="details-button"
          type="button"
          data-testid="start-recipe-btn"
          onClick={ clickStartButton }
        >
          { inProgress ? 'Continuar Receita' : 'Iniciar Receita'}
        </button>
      )}
    </div>
  );
}

export default DetalhesBebidas;
