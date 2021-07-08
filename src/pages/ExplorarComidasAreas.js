import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Header from '../Components/Header';
import MenuInferior from '../Components/MenuInferior';
import { fetchFoodsAPI } from '../services/fetchFoodsAPI';
import SearchBarBtn from '../Components/SearchBarBtn';
import myContext from '../context/myContext';

function ExplorarComidasAreas() {
  const { foodAreas, recipesFoods, setRecipeFoods } = useContext(myContext);

  const MAX_LENGTH = 12;
  const myRecipes = recipesFoods.slice(0, MAX_LENGTH);

  const fetchRecipesByArea = async (area) => {
    const recipes = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${area}`)
      .then((data) => data.json());
    setRecipeFoods(recipes.meals);
  };

  const handleSetArea = async (event) => {
    const { value } = event.target;
    if (value === 'All') {
      const allRecipes = await fetchFoodsAPI();
      setRecipeFoods(allRecipes);
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

      <div>
        {myRecipes.map(({ idMeal, strMeal, strMealThumb }, index) => (
          <Link
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
