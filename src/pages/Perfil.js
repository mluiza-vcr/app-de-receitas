import React, { useContext } from 'react';
import { useHistory } from 'react-router';
import LoginContext from '../context/LoginContext';

function Perfil() {
  const { email } = useContext(LoginContext);
  const history = useHistory();

  function resetProfile() {
    localStorage.clear();
    history.push('/');
  }

  return (
    <main>
      <span data-testid="profile-email">{email}</span>
      <button
        type="button"
        data-testid="profile-done-btn"
        onClick={ () => history.push('/receitas-feitas') }
      >
        Receitas Feitas
      </button>
      <button
        type="button"
        data-testid="profile-favorite-btn"
        onClick={ () => history.push('/receitas-favoritas') }
      >
        Receitas Favoritas
      </button>
      <button
        type="button"
        data-testid="profile-logout-btn"
        onClick={ resetProfile }
      >
        Sair
      </button>
    </main>
  );
}

export default Perfil;
