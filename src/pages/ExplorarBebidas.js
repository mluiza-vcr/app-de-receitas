import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import Header from '../Components/Header';
import '../Style/PageExplore.css';
import MenuInferior from '../Components/MenuInferior';

function ExplorarBebidas() {
  const [idDrink, setIdDrink] = useState('');
  const history = useHistory();

  const getRandomDrink = async () => {
    const myRandomDrink = await fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php')
      .then((response) => response.json())
      .then((meal) => meal.drinks[0]);
    setIdDrink(myRandomDrink.idDrink);
  };

  useEffect(() => {
    getRandomDrink();
  }, []);

  return (
    <div>
      <Header title="Explorar Bebidas" />
      <div className="btn-group">
        <button
          className="btns"
          type="button"
          data-testid="explore-by-ingredient"
          onClick={ () => history.push('/explorar/bebidas/ingredientes') }
        >
          Por Ingredientes
        </button>
        <button
          className="btns"
          type="button"
          data-testid="explore-surprise"
          onClick={ () => history.push(`/bebidas/${idDrink}`) }
        >
          Me Surpreenda!
        </button>
      </div>
      <MenuInferior />
    </div>
  );
}

export default ExplorarBebidas;
