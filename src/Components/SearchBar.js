import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { getFoodIngredient, getDrinkIngredient, getLetterFood, getLetterDrink,
  getDrinkName, getFoodName } from '../services/Apis';
import '../Style/SearchBar.css';

function SearchBar() {
  const [searchValue, setSearchValue] = useState({
    search: '',
    check: '',
  });
  const { search, check } = searchValue;

  const firstLetter = 'first-letter';

  const handleSearch = async () => {
    switch ('Comidas') {
    case
      check === 'ingredient':
      await getFoodIngredient(search);
      break;
    case
      check === 'name':
      await getFoodName(search);
      break;
    case
      check === firstLetter:
      await getLetterFood(search);
      break;
    default:
    }
    switch ('Bebidas') {
    case check === 'ingredient':
      await getDrinkIngredient(search);
      break;
    case check === 'name':
      await getDrinkName(search);
      break;
    case check === firstLetter:
      await getLetterDrink(search);
      break;
    default:
    }
  };

  const handleChange = ({ target }) => {
    if (search.length > 1 && check === firstLetter) {
      alert('Sua busca deve conter somente 1 (um) caracter');
    }
    if (target.name === 'check') {
      setSearchValue({ ...searchValue, check: target.value });
    } else {
      setSearchValue({ ...searchValue, search: target.value });
    }
  };
  return (
    <div className="searchBar">
      <div className="radiosSearchBar">
        <input
          type="text"
          placeholder="Search Recipe"
          data-testid="search-input"
          className="text"
          onChange={ handleChange }
        />
        <label htmlFor="name">
          Ingrediente
          <input
            type="radio"
            data-testid="ingredient-search-radio"
            className="radiosSearchBar"
            onChange={ handleChange }
          />
        </label>
        <label htmlFor="name">
          Nome
          <input
            type="radio"
            data-testid="name-search-radio"
            className="radiosSearchBar"
            onChange={ handleChange }
          />
        </label>
        <label htmlFor="firstLetter">
          Primeira Letra
          <input
            type="radio"
            label="Primeira Letra"
            data-testid="first-letter-search-radio"
            className="radiosSearchBar"
            onChange={ handleChange }
          />
        </label>

      </div>
      <Button
        variant="outline-danger"
        data-testid="exec-search-btn"
        onClick={ handleSearch }
      >
        Busca
      </Button>
    </div>
  );
}

export default SearchBar;
