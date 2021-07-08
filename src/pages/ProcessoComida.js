import React, { useContext, useEffect, useState } from 'react';
import { useRouteMatch, useHistory } from 'react-router-dom';
import myContext from '../context/myContext';

function ProcessoComida() {
  const { setDoneRecipe, concatId, setConcatId } = useContext(myContext);
  const { url } = useRouteMatch();
  const history = useHistory();

  const regex = /[\d+]/g;

  const idFood = url.match(regex).join('');

  const checkPath = () => {
    setDoneRecipe(concatId);
    history.push('/comidas');
  };

  return (
    <div>
      <h2>Processo de comida</h2>
      <button
        type="button"
        onClick={ () => {
          checkPath();
          console.log(concatId);
        } }
      >
        Finalizar Receita
      </button>
    </div>
  );
}

export default ProcessoComida;
