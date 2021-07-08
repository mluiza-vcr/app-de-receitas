import React, { useContext, useEffect, useState } from 'react';
import FoodContext from '../context/FoodContext';
import myContext from '../context/myContext';
import '../Style/BtnCategories.css';

function ButtonDrinkCategories() {
  const {
    drinkCategories,
    fetchDrinkCategories,
    fetchDrinkFilterByCategory,
    btnDrinkToggled,
    setBtnDrinkToggled,
  } = useContext(FoodContext);

  const [catchBtnFilterDrink, setCatchBtnFilterDrink] = useState('');
  const { setAuxRecipesDrinks } = useContext(myContext);

  const maxLength = 5;

  useEffect(() => {
    fetchDrinkCategories();
    fetchDrinkFilterByCategory(catchBtnFilterDrink);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [0, catchBtnFilterDrink]);

  function handleClick(e) {
    setCatchBtnFilterDrink(e.target.innerText);
    if (catchBtnFilterDrink === e.target.innerText || !btnDrinkToggled) {
      setBtnDrinkToggled((initial) => !initial);
    }
    setAuxRecipesDrinks([]);
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
        onClick={ () => setBtnDrinkToggled(false) }
      >
        All
      </button>
    </div>
  );
}

export default ButtonDrinkCategories;
