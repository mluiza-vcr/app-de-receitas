import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import myContext from '../context/myContext';

function useFavorite(foodOrDrink, url) {
  const { favoriteRecipes, setFavoriteRecipes } = useContext(myContext);
  const { id } = useParams();

  const createFavoriteObj = () => ({
    id,
    type: url.includes('comidas') ? 'comida' : 'bebida',
    area: foodOrDrink[0].strArea || '',
    category: foodOrDrink[0].strCategory || '',
    alcoholicOrNot: foodOrDrink[0].strAlcoholic || '',
    name: foodOrDrink[0].strMeal || foodOrDrink[0].strDrink,
    image: foodOrDrink[0].strMealThumb || foodOrDrink[0].strDrinkThumb,
  });

  const clickFavorite = () => {
    if (favoriteRecipes.some((item) => item.id === id)) {
      const newFavoriteList = favoriteRecipes.filter((item) => item.id !== id);
      setFavoriteRecipes(newFavoriteList);
      return;
    }
    setFavoriteRecipes([
      ...favoriteRecipes,
      createFavoriteObj(),
    ]);
  };

  const verifyFavorite = () => favoriteRecipes.some((item) => item.id === id);

  return {
    clickFavorite,
    verifyFavorite,
  };
}

export default useFavorite;
