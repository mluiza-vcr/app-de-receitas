import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import MenuInferior from '../components/MenuInferior';
import { fetchFoodsAPI } from '../services/fetchFoodsAPI';
import SearchBarBtn from '../components/SearchBarBtn';
import myContext from '../context/myContext';
import '../Style/ExplorarComidasArea.css';

function ExplorarComidasAreas() {
  const { foodAreas, recipesFoods, setRecipesFoods } = useContext(myContext);

  const MAX_LENGTH = 12;
  const myRecipes = recipesFoods.slice(0, MAX_LENGTH);

  const fetchRecipesByArea = async (area) => {
    const recipes = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${area}`)
      .then((data) => data.json());
    setRecipesFoods(recipes.meals);
  };

  const handleSetArea = async (event) => {
    const { value } = event.target;
    if (value === 'All') {
      const allRecipes = await fetchFoodsAPI();
      setRecipesFoods(allRecipes);
      return;
    }
    fetchRecipesByArea(value);
  };

  return (
    <div>
      <Header title="Explorar Origem" />
      <SearchBarBtn />

      <select
        data-testid="explore-by-area-dropdown"
        onChange={ handleSetArea }
      >
        <option
          key="All"
          data-testid="All-option"
        >
          All
        </option>
        {foodAreas.map((area) => (
          <option
            key={ area.strArea }
            data-testid={ `${area.strArea}-option` }
            value={ area.strArea }
          >
            {area.strArea}
          </option>
        ))}
      </select>

      <div className="card-container">
        {myRecipes.map(({ idMeal, strMeal, strMealThumb }, index) => (
          <Link
            className="explore-card"
            key={ idMeal }
            to={ `/comidas/${idMeal}` }
            data-testid={ `${index}-recipe-card` }
          >
            <img
              src={ strMealThumb }
              alt={ strMeal }
              data-testid={ `${index}-card-img` }
            />
            <p data-testid={ `${index}-card-name` }>{ strMeal }</p>
          </Link>
        ))}
      </div>

      <MenuInferior />
    </div>
  );
}

export default ExplorarComidasAreas;
