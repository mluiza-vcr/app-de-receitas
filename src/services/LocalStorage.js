const initialStatesForLocalStorage = () => {
  const favoriteRecipes = [];
  const myFavorites = JSON.parse(localStorage.getItem('favoriteRecipes'));
  if (!myFavorites) {
    localStorage.setItem('favoriteRecipes', JSON.stringify(favoriteRecipes));
  }
};

export default initialStatesForLocalStorage;
