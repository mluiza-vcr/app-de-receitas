import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { string } from 'prop-types';
import HeaderSearchBar from './HeaderSearchBar';
import imgProfile from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';
import '../Style/Header.css';

function Header({ title }) {
  const [searchButton, setSearchButton] = useState(false);

  const toogleSearchButton = () => {
    setSearchButton(!searchButton);
  };
  return (
    <div>
      <header className="header-container">
        <Link to="/perfil">
          <img
            data-testid="profile-top-btn"
            src={ imgProfile }
            alt="Profile"
          />
        </Link>
        <h2 data-testid="page-title" className="page-title">{ title }</h2>
        <input
          src={ searchIcon }
          type="image"
          data-testid="search-top-btn"
          onClick={ toogleSearchButton }
          alt=""
        />
      </header>
      {searchButton ? <HeaderSearchBar /> : null}
    </div>
  );
}

Header.propTypes = {
  title: string.isRequired,
};

export default Header;
