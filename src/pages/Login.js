import React, { useContext } from 'react';
import { useHistory } from 'react-router';
import { Form, Button } from 'react-bootstrap/';
import LoginContext from '../context/LoginContext';

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
    <div>
      <Form onSubmit={ submitLogin }>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            value={ email }
            onChange={ (ev) => setEmail(ev.target.value) }
            data-testid="email-input"
            type="email"
            placeholder="Enter email"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            value={ senha }
            onChange={ (ev) => setSenha(ev.target.value) }
            type="password"
            placeholder="Password"
            data-testid="password-input"
            pattern="[0-9a-zA-Z]{6,}"
            required
          />
        </Form.Group>
        <Button
          variant="primary"
          type="submit"
          data-testid="login-submit-btn"
          disabled={ validateLogin() }
        >
          Login
        </Button>
      </Form>
    </div>
  );
}

export default Login;
