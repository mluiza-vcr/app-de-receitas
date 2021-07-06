import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import RecipesProvider from './context/RecipesProvider';
import * as serviceWorker from './serviceWorker';
import LoginProvider from './context/LoginProvider';
import SearchProvider from './context/SearchProvider';

ReactDOM.render(
  <LoginProvider>
    <SearchProvider>
      <RecipesProvider>
        <App />
      </RecipesProvider>
    </SearchProvider>
  </LoginProvider>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
