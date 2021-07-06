import React, { useState } from 'react';
import { string } from 'prop-types';
import SearchBar from './SearchBar';
import imgSearch from '../images/searchIcon.svg';
import '../Style/Header.css';

function SearchBarBtn({ title }) {
  const [searchBar, setSearchBar] = useState(false);

  const HandleSearch = () => {
    if (searchBar) {
      setSearchBar(false);
    } else {
      setSearchBar(true);
    }
  };
  return (
    <div>
      <button type="button" onClick={ HandleSearch }>
        <img
          data-testid="search-top-btn"
          src={ imgSearch }
          alt="Search"
        />
      </button>
      { searchBar && <SearchBar title={ title } /> }
    </div>

  );
}

SearchBarBtn.propTypes = {
  title: string.isRequired,
};

export default SearchBarBtn;
