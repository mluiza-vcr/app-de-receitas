import React, { useContext, useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import FoodContext from '../context/FoodContext';
import myContext from '../context/myContext';
import '../Style/BtnCategoriesMain.css';

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
    <div className="btn-group-main">
      {
        drinkCategories.slice(0, maxLength).map((category, index) => (
          <Button
            className="btns-main"
            type="button"
            key={ index }
            data-testid={ `${category.strCategory}-category-filter` }
            onClick={ handleClick }
          >
            {category.strCategory}
          </Button>
        ))
      }
      <button
        className="btns-main"
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
