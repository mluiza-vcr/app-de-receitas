import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import fetchDrinkIngredients from '../services/fetchDrinkIngredientsAPI';
import DrinkCardExplorerIn from './DrinkCardExplorerIn';

function DrinkListExplorerIn() {
  const [ingredientsList, setIngredientsList] = useState([]);
  const [id, setId] = useState('idIngredient');
  const [name, setName] = useState('strIngredient');
  const { location: { pathname } } = useHistory();
  const maxNumber = 11;

  useEffect(() => {
    const location = pathname.split('/')[2];
    async function fetchIngredients() {
      const data = await fetchDrinkIngredients(location);
      setIngredientsList(data);
    }
    function checkingLocation() {
      if (location === 'bebidas') {
        setId('strIngredient1');
        setName('strIngredient1');
      }
    }
    fetchIngredients();
    checkingLocation();
  }, [pathname]);
  return (
    <div>
      { (ingredientsList !== null
      && ingredientsList.length > 0) && ingredientsList.map((ingredient, index) => {
        if (index <= maxNumber) {
          return (
            <DrinkCardExplorerIn
              key={ ingredient[id] }
              name={ ingredient[name] }
              index={ index }
            />
          );
        }
        return null;
      }) }
    </div>
  );
}

export default DrinkListExplorerIn;
