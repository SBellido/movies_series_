import React, {  useState, useEffect } from 'react';
import { getSeries } from '../../../services/database';
import '../../Products/Products.css';

const Series = () => {
  const [seriesData, setSeriesData] = useState([]);

  useEffect(() => {
    // Obtiene datos del archivo que simula una base datos en lugar de hacer una solicitud HTTP
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
     <div className='Container-title'>
        <h3 className='Title'>Popular Series</h3>
      </div>
      <div className="grid-container">
        {seriesData.map(item => (
          <div key={item.title} className="grid-item">
            <img className="image-product" src={item.images['Poster Art'].url} alt={item.title} />
            <div className='Conteinar-title--product'>
              <span>{item.title}</span>
            </div>
          </div>
        ))}
      </div>
    </React.Fragment>
  );
};


export { Series };