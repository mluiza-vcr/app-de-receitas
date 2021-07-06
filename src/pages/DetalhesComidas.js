import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';

function DetalhesComidas() {
  const [recipes, setRecipes] = useState({});

  const { location: { pathname } } = useHistory();
  const splitPathName = pathname.split('/');
  const idFood = splitPathName[2];

  const fetchMealAPI = async () => {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idFood}`);
    const recipe = await response.json();
    setRecipes(recipe.meals[0]);
  };

  useEffect(() => {
    fetchMealAPI();
  }, []);

  const { strMeal } = recipes;

  return (
    <div>
      <img data-testid="recipe-photo" src="" alt="" />
      <h2 data-testid="recipe-title">Titulo da receita</h2>
      <button type="button" data-testid="share-btn">Share</button>
      <button type="button" data-testid="favorite-btn">Favoritar</button>
      <p data-testid="recipe-category">Texto da categoria</p>
      <p>ingredientes</p>
      <p data-testid="instructions">Texto de instrucoes</p>
      <iframe data-testid="video" src="https://www.youtube.com/embed/XxqA_vomQFI" title="description" />
      <p>Card de receitas recomendadas</p>
      <button type="button" data-testid="start-recipe-btn">Iniciar receita</button>
    </div>
  );
}

export default DetalhesComidas;
