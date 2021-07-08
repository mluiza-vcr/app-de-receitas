import React from 'react';
import { useRouteMatch, useHistory } from 'react-router-dom';

function ProcessoComida() {
  const { url } = useRouteMatch();
  const history = useHistory();

  const regex = /[\d+]/g;

  const idFood = url.match(regex).join('');
  console.log(idFood);

  return (
    <div>
      <h2>Processo de comida</h2>
      <button
        type="button"
        onClick={ () => { history.push('/comidas'); } }
      >
        Finalizar Receita
      </button>
    </div>
  );
}

export default ProcessoComida;
