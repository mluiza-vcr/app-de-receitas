import React from 'react';
import { useHistory } from 'react-router';
import Header from '../Components/Header';
import MenuInferior from '../Components/MenuInferior';

function Explorar() {
  const history = useHistory();
  return (
    <div>
      <Header title="Explorar" />
      <div>
        <button
          type="button"
          variant="outline-secondary"
          data-testid="explore-food"
          onClick={ () => history.push('/explorar/comidas') }
        >
          Explorar Comidas
        </button>
        <button
          type="button"
          variant="outline-secondary"
          data-testid="explore-drinks"
          onClick={ () => history.push('/explorar/bebidas') }
        >
          Explorar Bebidas
        </button>
        <MenuInferior />
      </div>
    </div>
  );
}

export default Explorar;
