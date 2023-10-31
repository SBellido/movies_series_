import React, {  useState, useEffect } from 'react';
import { getMovies } from '../../../services/database';
import '../../Products/Products.css';

const Movies = () => {
  const [moviesData, setMoviesData] = useState([]);

  useEffect(() => {
    // Obtiene datos del archivo que simula una base datos en lugar de hacer una solicitud HTTP
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
      <div className='Container-title'>
        <h3 className='Title'>Popular Movies</h3>
      </div>
      <div className="grid-container">
        {moviesData.map(item => (
          <div key={item.title} className="grid-item">
            <img src={item.images['Poster Art'].url} alt={item.title} />
            <div className='Conteinar-title--product'>
              <p>{item.title}</p>
            </div>
          </div>
        ))}
      </div>
    </React.Fragment>
  );
};

export { Movies };