import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import Header from '../components/Header';
import '../Style/PageExplore.css';
import MenuInferior from '../components/MenuInferior';

function ExplorarComidas() {
  const [idMeal, setIdMeal] = useState('');
  const history = useHistory();

  const getRandomFood = async () => {
    const myRandomMeal = await fetch('https://www.themealdb.com/api/json/v1/1/random.php')
      .then((response) => response.json())
      .then((meal) => meal.meals[0]);
    setIdMeal(myRandomMeal.idMeal);
  };

  useEffect(() => {
    getRandomFood();
  }, []);

  return (
    <div>
      <Header title="Explorar Comidas" />
      <div className="btn-group">
        <button
          className="btns"
          type="button"
          data-testid="explore-by-ingredient"
          onClick={ () => history.push('/explorar/comidas/ingredientes') }
        >
          Por Ingredientes
        </button>
        <button
          className="btns"
          type="button"
          data-testid="explore-by-area"
          onClick={ () => history.push('/explorar/comidas/area') }
        >
          Por Local de Origem
        </button>
        <button
          className="btns"
          type="button"
          data-testid="explore-surprise"
          onClick={ () => history.push(`/comidas/${idMeal}`) }
        >
          Me Surpreenda!
        </button>
      </div>
      <MenuInferior />
    </div>
  );
}

export default ExplorarComidas;
