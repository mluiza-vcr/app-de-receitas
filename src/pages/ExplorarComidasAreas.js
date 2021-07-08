import React, { useEffect, useState } from 'react';
import Header from '../Components/Header';
import MenuInferior from '../Components/MenuInferior';
import SearchBarBtn from '../Components/SearchBarBtn';

function ExplorarComidasAreas() {
  const [areas, setAreas] = useState([]);

  const fetchAreaAPI = async () => {
    const myAreas = await fetch('https://www.themealdb.com/api/json/v1/1/list.php?a=list')
      .then((data) => data.json());
    setAreas(myAreas.meals);
  };

  useEffect(() => {
    fetchAreaAPI();
  }, []);

  console.log(areas);

  return (
    <div>
      <Header title="Explorar Origem" />
      <SearchBarBtn />
      <select
        data-testid="explore-by-area-dropdown"
      >
        <option key="all" data-testid="All-option">All</option>
        {areas.map((area) => (
          <option
            key={ area.strArea }
            data-testid={ `${area.strArea}-option` }
          >
            {area.strArea}
          </option>
        ))}
      </select>
      <MenuInferior />
    </div>
  );
}

export default ExplorarComidasAreas;
