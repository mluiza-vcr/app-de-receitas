import React, { useContext, useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
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
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [0, catchBtnFilter]);

  function handleClick(e) {
    setCatchBtnFilter(e.target.innerText);
    if (catchBtnFilter === e.target.innerText || !btnToggled) {
      setBtnToggled((initial) => !initial);
    }
  }

  return (
    <div className="btn-group">
      {
        mealCategories.slice(0, maxLength).map((category, index) => (
          <Button
            className="btns"
            type="button"
            key={ index }
            data-testid={ `${category.strCategory}-category-filter` }
            onClick={ handleClick }
          >
            {category.strCategory}
          </Button>
        ))
      }
    </div>
  );
}

export default ButtonMealCategories;
