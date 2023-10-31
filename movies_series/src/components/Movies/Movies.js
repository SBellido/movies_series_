import React, { useState, useEffect } from 'react';
import { getMovies } from '../../services/database';

const Movies = () => {
  const [moviesData, setMoviesData] = useState([]);

  const handleClick = () => {
    window.history.go(-1);
  };

  useEffect(() => {
    // Obtén los datos de la base de datos en lugar de hacer una solicitud HTTP
    const data = getMovies();

    // Filtra, ordena y obtén los primeros 20 resultados
    const filteredData = data
      .filter(item => item.releaseYear >= 2010 && item.programType === 'movie')
      .sort((a, b) => a.title.localeCompare(b.title))
      .slice(0, 20);

    setMoviesData(filteredData);
  }, []);

  return (
    <React.Fragment>
      <button onClick={handleClick}>Volver</button>
      <div>
        {moviesData.map(item => (
          <div key={item.title} className="result-box">
            <img src={item.images['Poster Art'].url} alt={item.title} />
            <h3>{item.title}</h3>
          </div>
        ))}
      </div>
    </React.Fragment>
  );
};


export { Movies };