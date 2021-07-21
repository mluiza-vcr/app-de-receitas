import React, { useContext } from 'react';
import { useHistory } from 'react-router';
import { Form } from 'react-bootstrap/';
import LoginContext from '../context/LoginContext';
import icones1 from '../images/icones1.png';
import appReceitas from '../images/app_receitas.png';
import '../Style/Login.css';

/** Source: https://react-bootstrap.netlify.app/components/forms/#forms */

function Login() {
  const { email, senha, setEmail, setSenha } = useContext(LoginContext);
  const history = useHistory();

  function submitLogin(event) {
    event.preventDefault();
    localStorage.setItem('mealsToken', '1');
    localStorage.setItem('cocktailsToken', '1');
    const emailToken = {
      email,
    };
    localStorage.setItem('user', JSON.stringify(emailToken));
    history.push('/comidas');
  }

  function validateEmail(em) {
    const re = /\S+@\S+\.\S+/;
    return re.test(em);
  }

  function validateLogin() {
    const maxLength = 7;
    return !(senha.length >= maxLength && validateEmail(email));
  }

  return (
    <section>
      <div className="img-container">
        <img
          className="img-login"
          src={ icones1 }
          alt="Panelinha"
        />
        <br />
        <img
          className="title-login"
          src={ appReceitas }
          alt="App de receitas"
        />
      </div>
      <div className="login-input">
        <Form onSubmit={ submitLogin }>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <input
              value={ email }
              className="input-email"
              onChange={ (ev) => setEmail(ev.target.value) }
              data-testid="email-input"
              type="email"
              placeholder="Enter email"
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <input
              value={ senha }
              className="input-email"
              onChange={ (ev) => setSenha(ev.target.value) }
              type="password"
              placeholder="Password"
              data-testid="password-input"
              pattern="[0-9a-zA-Z]{6,}"
              required
            />
          </Form.Group>
          <button
            variant="outline-success"
            type="submit"
            data-testid="login-submit-btn"
            disabled={ validateLogin() }
            className="btn-login"
          >
            Login
          </button>
        </Form>
      </div>
    </section>
  );
}

export default Login;
