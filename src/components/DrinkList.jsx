import React, { useContext, useEffect } from 'react';
import DrinkCard from './DrinkCard';
import FoodContext from '../context/FoodContext';

function DrinkList() {
  const { drinks, fetchDrink, filterDrink, btnDrinkToggled } = useContext(FoodContext);

  useEffect(() => {
    fetchDrink();
  }, []);

  if (filterDrink && btnDrinkToggled) {
    return (
      <div>
        <DrinkCard drinks={ filterDrink } />
      </div>
    );
  }
  return (
    <div>
      <DrinkCard drinks={ drinks } />
    </div>
  );
}

export default DrinkList;
