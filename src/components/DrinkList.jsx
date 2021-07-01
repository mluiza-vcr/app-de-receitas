import React, { useContext, useEffect } from 'react';
import DrinkCard from './DrinkCard';
import FoodContext from '../context/FoodContext';

function DrinkList() {
  const { drinks, fetchDrink } = useContext(FoodContext);

  useEffect(() => {
    fetchDrink();
  }, []);

  return (
    <div>
      <DrinkCard drinks={ drinks } />
    </div>
  );
}

export default DrinkList;
