import React, { useState } from 'react';
import PropTypes from 'prop-types';
import FoodContext from './FoodContext';
import {
  getMeal,
  getDrink,
  getMealCategories,
  getDrinkCategories,
  getFilterMealCategory,
  getFilterDrinkCategory,
} from '../services/Apis';

function FoodProvider({ children }) {
  const [isLoading, setIsLoading] = useState(false);
  const [meals, setMeal] = useState([]);
  const [drinks, setDrink] = useState([]);
  const [mealCategories, setMealCategories] = useState([]);
  const [drinkCategories, setDrinkCategories] = useState([]);
  const [filterMeal, setFilterMeal] = useState([]);
  const [filterDrink, setFilterDrink] = useState([]);
  const [btnToggled, setBtnToggled] = useState('');
  const [btnDrinkToggled, setBtnDrinkToggled] = useState('');
  // para pegar a info salva no localStorage token doneRecipes
  const [readyRecipes, setReadyRecipes] = useState([]);

  async function fetchMeal() {
    setIsLoading(true);
    const mealsResult = await getMeal();
    setMeal(mealsResult);
    setIsLoading(false);
  }

  async function fetchDrink() {
    setIsLoading(true);
    const drinksResult = await getDrink();
    setDrink(drinksResult);
    setIsLoading(false);
  }

  async function fetchMealCategories() {
    setIsLoading(true);
    const mealCategoriesResult = await getMealCategories();
    setMealCategories(mealCategoriesResult);
    setIsLoading(false);
  }

  async function fetchDrinkCategories() {
    setIsLoading(true);
    const drinkCategoriesResult = await getDrinkCategories();
    setDrinkCategories(drinkCategoriesResult);
    setIsLoading(false);
  }

  async function fetchMealFilterByCategory(category) {
    setIsLoading(true);
    const mealByCategory = await getFilterMealCategory(category);
    setFilterMeal(mealByCategory);
    setIsLoading(false);
  }

  async function fetchDrinkFilterByCategory(category) {
    setIsLoading(true);
    mealCategories.forEach((mealCategory) => {
      if (mealCategory.strCategory === category) {
        setIsLoading(false);
      }
    });
    if (category && !isLoading) {
      const drinkByCategory = await getFilterDrinkCategory(category);
      setFilterDrink(drinkByCategory);
    }
  }

  return (
    <FoodContext.Provider
      value={ {
        isLoading,
        meals,
        setMeal,
        drinks,
        setDrink,
        fetchMeal,
        fetchDrink,
        mealCategories,
        setMealCategories,
        fetchMealCategories,
        drinkCategories,
        setDrinkCategories,
        fetchDrinkCategories,
        filterMeal,
        setFilterMeal,
        fetchMealFilterByCategory,
        filterDrink,
        setFilterDrink,
        fetchDrinkFilterByCategory,
        btnToggled,
        setBtnToggled,
        btnDrinkToggled,
        setBtnDrinkToggled,
        readyRecipes,
        setReadyRecipes,
      } }
    >
      {children}
    </FoodContext.Provider>
  );
}

FoodProvider.propTypes = {
  children: PropTypes.node,
}.isRequired;

export default FoodProvider;
