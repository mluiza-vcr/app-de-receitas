import React from 'react';
import { Link } from 'react-router-dom';
import { string } from 'prop-types';
import imgProfile from '../images/profileIcon.svg';
import imgSearch from '../images/searchIcon.svg';

function Header({ title }) {
  return (
    <div>
      <Link to="/perfil">
        <img src={ imgProfile } alt="Profile" data-testid="profile-top-btn" />
      </Link>
      <h2 data-testid="page-title" className="page-title">{ title }</h2>
      <button type="button">
        <img src={ imgSearch } alt="Search" data-testid="search-top-btn" />
      </button>
    </div>
  );
}

Header.propTypes = {
  title: string.isRequired,
};

export default Header;
