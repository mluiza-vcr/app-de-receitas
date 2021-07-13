import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import myContext from '../context/myContext';

function useInProgress(url) {
  const { id } = useParams();

  const { inProgressRecipes, setInProgressRecipes } = useContext(myContext);

  const recipeType = url.includes('comidas') ? 'meals' : 'cocktails';

  const ingredientsList = inProgressRecipes[recipeType][id] || [];

  const saveProgressStorage = (target) => {
    if (target.checked) {
      const newIngredientsList = ingredientsList.concat(target.id);
      setInProgressRecipes({
        ...inProgressRecipes,
        [recipeType]: {
          ...inProgressRecipes[recipeType],
          [id]: newIngredientsList,
        },
      });
      return;
    }
    const newIngredientsList = ingredientsList.filter((item) => item !== target.id);
    setInProgressRecipes({
      ...inProgressRecipes,
      [recipeType]: {
        ...inProgressRecipes[recipeType],
        [id]: newIngredientsList,
      },
    });
  };
  return {
    saveProgressStorage,
    ingredientsList,
  };
}

export default useInProgress;
