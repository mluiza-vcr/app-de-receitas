import React, { useState } from 'react';
import PropTypes from 'prop-types';
import LoginContext from './LoginContext';

function LoginProvider({ children }) {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  return (
    <LoginContext.Provider
      value={ { email, senha, setEmail, setSenha } }
    >
      {children}
    </LoginContext.Provider>
  );
}

LoginProvider.propTypes = {
  children: PropTypes.string.isRequired,
};

export default LoginProvider;
