import React, { useState, useEffect } from 'react';
import { getSeries } from '../../services/database';

const Series = () => {
  const [seriesData, setSeriesData] = useState([]);

  const handleClick = () => {
    window.history.go(-1);
  };

  useEffect(() => {
    // Obtén los datos de la base de datos en lugar de hacer una solicitud HTTP
    const data = getSeries();

    // Filtra, ordena y obtén los primeros 20 resultados
    const filteredData = data
      .filter(item => item.releaseYear >= 2010 && item.programType === 'series')
      .sort((a, b) => a.title.localeCompare(b.title))
      .slice(0, 20);

    setSeriesData(filteredData);
  }, []);

  return (
    <React.Fragment>
      <button onClick={handleClick}>Volver</button>
      <div>
        {seriesData.map(item => (
          <div key={item.title} className="result-box">
            <img src={item.images['Poster Art'].url} alt={item.title} />
            <h3>{item.title}</h3>
          </div>
        ))}
      </div>
    </React.Fragment>
  );
};


export { Series };