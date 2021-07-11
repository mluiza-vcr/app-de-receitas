import React from 'react';
import { useHistory } from 'react-router';
import Header from '../components/Header';
import '../Style/PageExplore.css';
import MenuInferior from '../components/MenuInferior';

function Explorar() {
  const history = useHistory();
  return (
    <div>
      <Header title="Explorar" />
      <div className="btn-group">
        <button
          className="btns"
          type="button"
          variant="outline-secondary"
          data-testid="explore-food"
          onClick={ () => history.push('/explorar/comidas') }
        >
          Explorar Comidas
        </button>
        <button
          className="btns"
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
