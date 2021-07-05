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

export async function getFoodIngredient(ingredient) {
  const fetchApi = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${ingredient}`);
  const response = await fetchApi.json();
  return response;
}

export async function getDrinkIngredient(ingredient) {
  const fetchApi = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingredient}`);
  const response = await fetchApi.json();
  return response;
}

export async function getFoodName(name) {
  const fetchApi = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`);
  const response = fetchApi.json();
  return response;
}

export async function getLetterFood(first) {
  const fetchApi = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${first}`);
  const response = fetchApi.json();
  return response;
}

export async function getDrinkName(name) {
  const fetchApi = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${name}`);
  const response = fetchApi.json();
  return response;
}

export async function getLetterDrink(first) {
  const fetchApi = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${first}`);
  const response = fetchApi.json();
  return response;
}
