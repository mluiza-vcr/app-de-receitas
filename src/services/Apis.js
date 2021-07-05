export async function getMeal() {
  const response = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=');
  const { meals } = await response.json();
  return meals;
}

export async function getDrink() {
  const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=');
  const { drinks } = await response.json();
  return drinks;
}

export const endpointFood = (text) => ({
  name: `https://www.themealdb.com/api/json/v1/1/search.php?s=${text}`,
  ingredient: `https://www.themealdb.com/api/json/v1/1/filter.php?i=${text}`,
  firstLetter: `https://www.themealdb.com/api/json/v1/1/search.php?f=${text}`,
});

export const endpointDrink = (text) => ({
  name: `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${text}`,
  ingredient: `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${text}`,
  firstLetter: `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${text}`,
});

export async function fetchTudo(link) {
  const response = await fetch(link);
  const json = await response.json();
  return json;
}
