import React, { useContext, useState, useEffect } from 'react';
import { useRouteMatch, Redirect } from 'react-router';
import { Button } from 'react-bootstrap';
import { endpointFood, endpointDrink, fetchTudo } from '../services/Apis';
import SearchContext from '../context/SearchContext';
import '../Style/SearchBar.css';

function SearchBar() {
  const [apiResponse, setApiResponse] = useState([]);
  const [apisKeys, setApisKeys] = useState('');
  const [radioButtonName, setRadioButtonName] = useState('');
  const { setFilterByText, filterByText } = useContext(SearchContext);
  const { path } = useRouteMatch();

  const validateKeys = () => {
    if (path === '/comidas') {
      setApisKeys('meals');
    }

    if (path === '/bebidas') {
      setApisKeys('drinks');
    }
  };

  useEffect(() => {
    validateKeys();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const responseApi = async (endpoint) => {
    const response = await fetchTudo(endpoint);
    if (response[apisKeys].length === 0) {
      // eslint-disable-next-line no-alert
      window.alert('Sinto muito, não encontramos nenhuma receita para esses filtros');
    }
    return setApiResponse(response[apisKeys]);
  };

  const handleSubmit = () => {
    if (filterByText.length > 1 && radioButtonName === 'firstLetter') {
      // eslint-disable-next-line no-alert
      window.alert('Sua busca deve conter somente 1 (um) caracter');
    }

    if (path === '/comidas') {
      responseApi(endpointFood(filterByText)[radioButtonName]);
    }

    if (path === '/bebidas') {
      responseApi(endpointDrink(filterByText)[radioButtonName]);
    }
  };

  const handleAPI = (title, image, id, alt) => {
    if (apiResponse.length === 1) {
      return <Redirect to={ `/${alt}/${apiResponse[0][id]}` } />;
    }

    const MAX_LENGHT_RECIPES = 12;
    const foodsOrDrinks = apiResponse.slice(0, MAX_LENGHT_RECIPES);
    return foodsOrDrinks.map((item, index) => (
      <div
        data-testid={ `${index}-recipe-card` }
        key={ item[id] }
      >
        <h1 data-testid={ `${index}-card-name` }>{item[title]}</h1>
        <img
          data-testid={ `${index}-card-img` }
          width="200"
          src={ item[image] }
          alt={ alt }
        />
      </div>
    ));
  };

  const validateMap = () => {
    if (path === '/comidas') {
      return handleAPI('strMeal', 'strMealThumb', 'idMeal', 'comidas');
    }

    if (path === '/bebidas') {
      return handleAPI('strDrink', 'strDrinkThumb', 'idDrink', 'bebidas');
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
          onChange={ (e) => setFilterByText(e.target.value) }
        />
        <label htmlFor="name">
          Ingrediente
          <input
            type="radio"
            name="Search"
            data-testid="ingredient-search-radio"
            className="radiosSearchBar"
            onClick={ () => setRadioButtonName('ingredient') }
          />
        </label>
        <label htmlFor="name">
          Nome
          <input
            type="radio"
            name="Search"
            data-testid="name-search-radio"
            className="radiosSearchBar"
            onClick={ () => setRadioButtonName('name') }
          />
        </label>
        <label htmlFor="firstLetter">
          Primeira Letra
          <input
            type="radio"
            name="Search"
            label="Primeira Letra"
            data-testid="first-letter-search-radio"
            className="radiosSearchBar"
            onClick={ () => setRadioButtonName('firstLetter') }
          />
        </label>

      </div>
      <Button
        variant="outline-danger"
        data-testid="exec-search-btn"
        onClick={ handleSubmit }
      >
        Busca
      </Button>
      { validateMap() }
    </div>
  );
}

export default SearchBar;
