import React from 'react';
import { Link } from 'react-router-dom';
import { string } from 'prop-types';
import imgProfile from '../images/profileIcon.svg';
import '../Style/Header.css';

function Header({ title }) {
  return (
    <div className="header-container">
      <Link to="/perfil">
        <img
          data-testid="profile-top-btn"
          src={ imgProfile }
          alt="Profile"
        />
      </Link>
      <h2 data-testid="page-title" className="page-title">{ title }</h2>
    </div>
  );
}

Header.propTypes = {
  title: string.isRequired,
};

export default Header;
