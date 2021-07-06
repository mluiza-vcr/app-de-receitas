import React, { useContext, useEffect, useState } from 'react';
import FoodContext from '../context/FoodContext';

function ButtonDrinkCategories() {
  const {
    drinkCategories,
    fetchDrinkCategories,
    fetchDrinkFilterByCategory,
    btnDrinkToggled,
    setBtnDrinkToggled,
  } = useContext(FoodContext);

  const [catchBtnFilterDrink, setCatchBtnFilterDrink] = useState('');

  const maxLength = 5;

  useEffect(() => {
    fetchDrinkCategories();
    fetchDrinkFilterByCategory(catchBtnFilterDrink);
  }, [0, catchBtnFilterDrink]);

  function handleClick(e) {
    setCatchBtnFilterDrink(e.target.innerText);
    if (catchBtnFilterDrink === e.target.innerText || !btnDrinkToggled) {
      setBtnDrinkToggled((initial) => !initial);
    }
  }
  return (
    <div>
      {
        drinkCategories.slice(0, maxLength).map((category, index) => (
          <button
            type="button"
            key={ index }
            data-testid={ `${category.strCategory}-category-filter` }
            onClick={ handleClick }
          >
            {category.strCategory}
          </button>
        ))
      }
      <button
        type="button"
        data-testid="All-category-filter"
      >
        All
      </button>
    </div>
  );
}

export default ButtonDrinkCategories;
