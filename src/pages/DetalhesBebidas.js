import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import '../Style/PagesDetails.css';
import getIngredientList from '../services/getIngredients';
<<<<<<< HEAD
import blackHeartIcon from '../images/blackHeartIcon.svg';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';
import shareIcon from '../images/shareIcon.svg';
=======
>>>>>>> 284dfa500e8b9e37a8e6a4b6810efa78f5a0fd7a

function DetalhesBebidas() {
  const [recipes, setRecipes] = useState({});
  const [ingredients, setIngredients] = useState([]);
<<<<<<< HEAD
  const [recomendation, setRecomendation] = useState([]);
  const [inProgress, setInProgress] = useState('');
  const [done, setDone] = useState('');
  const [shareButton, setShareButton] = useState(false);
  const [favorited, setFavorited] = useState('');
=======
  const [inProgress, setInProgress] = useState('');
  const [done, setDone] = useState('');
  const [recomendation, setRecomendation] = useState([]);
  const history = useHistory();
>>>>>>> 284dfa500e8b9e37a8e6a4b6810efa78f5a0fd7a

  const { location: { pathname } } = useHistory();
  const splitPathName = pathname.split('/');
  const idDrink = splitPathName[2];

<<<<<<< HEAD
  const history = useHistory();

=======
>>>>>>> 284dfa500e8b9e37a8e6a4b6810efa78f5a0fd7a
  const fetchDrinksAPI = async () => {
    const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idDrink}`);
    const recipe = await response.json();
    setRecipes(recipe.drinks[0]);
  };

<<<<<<< HEAD
  const fetchRecomendation = async () => {
    const MAX_RECOMENDATION = 6;
    const response = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=');
    const json = await response.json();
    const recommend = json.meals;
    setRecomendation(recommend.slice(0, MAX_RECOMENDATION));
  };

  useEffect(() => {
    fetchDrinksAPI();
    fetchRecomendation();
  }, []);

  useEffect(() => {
    setIngredients(getIngredientList(recipes));
  }, [recipes]);

  const { strDrinkThumb, strDrink, strAlcoholic, strInstructions } = recipes;

  const clickFavorite = () => {
    setFavorited(!favorited);
  };

=======
>>>>>>> 284dfa500e8b9e37a8e6a4b6810efa78f5a0fd7a
  const checkInList = (myList, id) => myList.some((item) => item.id === id);

  const checkDoneButton = () => {
    const myDoneList = (JSON.parse(localStorage.getItem('doneRecipes'))
      ? JSON.parse(localStorage.getItem('doneRecipes')) : []);
    setDone(checkInList(myDoneList, idDrink));
  };

  const checkInProgress = () => {
    const myProgress = JSON.parse(localStorage.getItem('inProgressRecipes'));
    if (myProgress) {
<<<<<<< HEAD
      setInProgress(Object.keys(myProgress.drinks).includes(idDrink));
    }
  };

  const clickShare = () => {
    navigator.clipboard.writeText(`http://localhost:3000${pathname}`);
    setShareButton(!shareButton);
  };

  useEffect(() => {
=======
      setInProgress(Object.keys(myProgress.cocktails).includes(idDrink));
    }
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
>>>>>>> 284dfa500e8b9e37a8e6a4b6810efa78f5a0fd7a
    checkDoneButton();
    checkInProgress();
  });

<<<<<<< HEAD
=======
  useEffect(() => {
    setIngredients(getIngredientList(recipes));
  }, [recipes]);

  const {
    strDrinkThumb,
    strDrink,
    strAlcoholic,
    strInstructions,
  } = recipes;

>>>>>>> 284dfa500e8b9e37a8e6a4b6810efa78f5a0fd7a
  return (
    <div>
      <img data-testid="recipe-photo" width="350" src={ strDrinkThumb } alt="" />
      <h2 data-testid="recipe-title">{strDrink}</h2>
<<<<<<< HEAD
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
=======
      <button type="button" data-testid="share-btn">Share</button>
      <button type="button" data-testid="favorite-btn">Favoritar</button>
      <p data-testid="recipe-category">{strAlcoholic}</p>
      <ul>
        <h1>Ingredientes</h1>
        { ingredients.map(({ ingredient, amount }, index) => (
>>>>>>> 284dfa500e8b9e37a8e6a4b6810efa78f5a0fd7a
          <li
            key={ index }
            data-testid={ `${index}-ingredient-name-and-measure` }
          >
            {`${ingredient} - ${amount}`}
          </li>
        ))}
      </ul>
<<<<<<< HEAD
      <h3>Instruções</h3>
      <p data-testid="instructions">{strInstructions}</p>
      <h3>Pratos que combinam com este drink</h3>
=======
      <p data-testid="instructions">{strInstructions}</p>
>>>>>>> 284dfa500e8b9e37a8e6a4b6810efa78f5a0fd7a
      <div className="recomentadion-container">
        {recomendation.map(({ strMealThumb, strMeal, strCategory }, index) => (
          <div
            className="recommended-card"
            key={ strMeal }
            data-testid={ `${index}-recomendation-card` }
          >
            <img src={ strMealThumb } alt={ strMeal } />
<<<<<<< HEAD
            <p>{strCategory}</p>
            <p data-testid={ `${index}-recomendation-title` }>{strMeal}</p>
=======
            <p>{ strCategory }</p>
            <p data-testid={ `${index}-recomendation-title` }>{ strMeal }</p>
>>>>>>> 284dfa500e8b9e37a8e6a4b6810efa78f5a0fd7a
          </div>
        ))}
      </div>
      {done ? null : (
        <button
          className="details-button"
          type="button"
          data-testid="start-recipe-btn"
<<<<<<< HEAD
          onClick={ () => history.push(`/bebidas/${idDrink}/in-progress`) }
        >
          { inProgress ? 'Continuar Receita' : 'Iniciar Receita'}
=======
          onClick={ clickStartButton }
        >
          { inProgress ? 'Continuar Receita' : 'Iniciar Receita' }
>>>>>>> 284dfa500e8b9e37a8e6a4b6810efa78f5a0fd7a
        </button>
      )}
    </div>
  );
}

export default DetalhesBebidas;
