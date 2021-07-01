import React, { useState } from 'react';
import PropTypes from 'prop-types';
import FoodContext from './FoodContext';
import { getMeal, getDrink } from '../services/Apis';

function FoodProvider({ children }) {
  const [isLoading, setIsLoading] = useState(false);
  const [meals, setMeal] = useState([]);
  const [drinks, setDrink] = useState([]);

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
