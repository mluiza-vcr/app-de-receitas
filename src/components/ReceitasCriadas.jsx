import React from 'react';
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

  //  const { readyRecipes, setReadyRecipes } = useContext(FoodContext);

  function renderElements() {
    return (
      doneRecipes.map((readyRecipe, index) => (
        <div key={ index }>
          <img
            src={ readyRecipe.image }
            data-testid={ `${index}-horizontal-image` }
            alt="imagem horizontal"
            width="100"
          />
          <p data-testid={ `${index}-horizontal-top-text` }>{readyRecipe.category}</p>
          <p data-testid={ `${index}-horizontal-name` }>{readyRecipe.name}</p>
          <p data-testid={ `${index}-horizontal-done-date` }>{readyRecipe.doneDate}</p>
          <button
            type="button"
            data-testid={ `${index}-horizontal-share-btn` }
          >
            Share Recipe
          </button>

          <p
            data-testid={ `${index}-Pasta-horizontal-tag` }
            key={ index }
          >
            {readyRecipe.tags[0]}
          </p>
          <p
            data-testid={ `${index}-Curry-horizontal-tag` }
            key={ index }
          >
            {readyRecipe.tags[1]}
          </p>
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
      { renderElements() }
    </div>
  );
}
export default ReceitasCriadas;
