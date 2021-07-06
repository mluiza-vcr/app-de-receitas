import React, { useState } from 'react';
import PropTypes from 'prop-types';
import SearchContext from './SearchContext';

function SearchProvider({ children }) {
  const [filterByIngredient, setFilterByIngredient] = useState(false);
  const [filterByName, setFilterByName] = useState(false);
  const [filterByFirstLetter, setFilterByFirstLetter] = useState(false);
  const [filterByText, setFilterByText] = useState('');

  return (
    <SearchContext.Provider
      value={ {
        filterByFirstLetter,
        filterByIngredient,
        filterByName,
        setFilterByFirstLetter,
        setFilterByName,
        setFilterByIngredient,
        filterByText,
        setFilterByText,
      } }
    >
      { children }
    </SearchContext.Provider>
  );
}

SearchProvider.propTypes = {
  children: PropTypes.node,
}.isRequired;

export default SearchProvider;
