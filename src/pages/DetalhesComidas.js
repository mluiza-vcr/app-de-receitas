import React, { useEffect, useState, useContext } from 'react';
import { useHistory } from 'react-router';
import getIngredientList from '../services/getIngredients';
import myContext from '../context/myContext';
import '../Style/PagesDetails.css';
import blackHeartIcon from '../images/blackHeartIcon.svg';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';
import shareIcon from '../images/shareIcon.svg';

function DetalhesComidas() {
  const [recipes, setRecipes] = useState({});
  const [ingredients, setIngredients] = useState([]);
  const [recomendation, setRecomendation] = useState([]);
  const { inProgress, doneRecipe } = useContext(myContext);
  const [shareButton, setShareButton] = useState(false);
  const [favorited, setFavorited] = useState('');

  const { location: { pathname } } = useHistory();
  const splitPathName = pathname.split('/');
  const idFood = splitPathName[2];

  const history = useHistory();

  const fetchMealAPI = async () => {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idFood}`);
    const recipe = await response.json();
    setRecipes(recipe.meals[0]);
  };

  const fetchRecomendation = async () => {
    const MAX_RECOMENDATION = 6;
    const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=');
    const json = await response.json();
    const recommend = json.drinks;
    setRecomendation(recommend.slice(0, MAX_RECOMENDATION));
  };

  useEffect(() => {
    fetchMealAPI();
    fetchRecomendation();
  }, [doneRecipe]);

  useEffect(() => {
    setIngredients(getIngredientList(recipes));
  }, [recipes]);

  const { strMealThumb, strMeal, strCategory, strYoutube, strInstructions } = recipes;

  let youTubeAdress = '';
  if (strYoutube) {
    youTubeAdress = strYoutube.split('=');
  }

  const clickFavorite = () => {
    setFavorited(!favorited);
  };

  const clickShare = () => {
    navigator.clipboard.writeText(`http://localhost:3000${pathname}`);
    setShareButton(!shareButton);
  };

  const checkDoneRecipe = () => {
    if (doneRecipe.includes(idFood)) {
      return true;
    }
    return false;
  };

  useEffect(() => {
    console.log(doneRecipe);
  }, []);

  return (
    <div>
      <img data-testid="recipe-photo" width="350" src={ strMealThumb } alt="" />
      <h2 data-testid="recipe-title">{strMeal}</h2>
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
      <p data-testid="recipe-category">{strCategory}</p>
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
      <p data-testid="instructions">{strInstructions}</p>
      <h3>Vídeo</h3>
      <iframe
        data-testid="video"
        src={ `https://www.youtube.com/embed/${youTubeAdress[1]}` }
        title="video"
      />
      <h3>Drinks que combinam com este prato</h3>
      <div className="recomentadion-container">
        {recomendation.map(({ strDrinkThumb, strDrink, strAlcoholic }, index) => (
          <div
            className="recommended-card"
            key={ strDrink }
            data-testid={ `${index}-recomendation-card` }
          >
            <img src={ strDrinkThumb } alt={ strDrink } />
            <p>{strAlcoholic}</p>
            <p data-testid={ `${index}-recomendation-title` }>{strDrink}</p>
          </div>
        ))}
      </div>
      <button
        className="details-button"
        type="button"
        data-testid="start-recipe-btn"
        onClick={ () => history.push(`/comidas/${idFood}/in-progress`) }
        disable={ checkDoneRecipe }
      >
        {inProgress ? 'Continuar Receita' : 'Iniciar Receita'}
      </button>
    </div>
  );
}

export default DetalhesComidas;
