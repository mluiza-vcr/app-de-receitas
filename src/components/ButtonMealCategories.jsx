import React, { useContext, useEffect, useState } from 'react';
import FoodContext from '../context/FoodContext';

function ButtonMealCategories() {
  const {
    mealCategories,
    fetchMealCategories,
    fetchMealFilterByCategory,
    btnToggled,
    setBtnToggled,
  } = useContext(FoodContext);

  const [catchBtnFilter, setCatchBtnFilter] = useState('');

  const maxLength = 5;

  useEffect(() => {
    fetchMealCategories(); // botões na tela
    fetchMealFilterByCategory(catchBtnFilter);
  }, [0, catchBtnFilter]);

  function handleClick(e) {
    setCatchBtnFilter(e.target.innerText);
    if (catchBtnFilter === e.target.innerText || !btnToggled) {
      setBtnToggled((initial) => !initial);
    }
  }

  return (
    <div>
      {
        mealCategories.slice(0, maxLength).map((category, index) => (
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

export default ButtonMealCategories;
