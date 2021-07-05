import React, { useContext, useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import SearchContext from '../context/SearchContext';
import { endpointFood, endpointDrink, fetchTudo } from '../services/Apis';
import { useRouteMatch } from 'react-router';
import '../Style/SearchBar.css';

function SearchBar() {
  const [apiResponse, setApiResponse] = useState([]);
  const [apisKeys, setApisKeys] = useState('');
  const [radioButtonName, setRadioButtonName] = useState('');
  const { setFilterByText, filterByText } = useContext(SearchContext);
  const { path } = useRouteMatch();

  useEffect(() => {
    console.log(path);
  }, []);

  const responseApi = async (endpoint) => {
    const response = await fetchTudo(endpoint(filterByText)[radioButtonName]);
    console.log(response);
    if (response === null) {
      setApiResponse([]);
    } else {
      console.log(setApiResponse(response[radioButtonName]));
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
            onClick={ () => setRadioButtonName('ingredient')}
          />
        </label>
        <label htmlFor="name">
          Nome
          <input
            type="radio"
            name="Search"
            data-testid="name-search-radio"
            className="radiosSearchBar"
            onClick={ () => setRadioButtonName('name')}
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
        onClick={ responseApi }
      >
        Busca
      </Button>
    </div>
  );
}

export default SearchBar;
