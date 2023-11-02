import React, {  useState, useEffect } from 'react';
import { getSeries } from '../../../services/database';
import CloseIcon from '@mui/icons-material/Close';
import '../Programs.css';

const SeriesList = () => {
  const [seriesData, setSerieData] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [serieSelected, setSerieSelected] = useState(null);

  useEffect(() => {
    const data = getSeries();
    const filteredData = data
      .filter(item => item.releaseYear >= 2010 && item.programType === 'series')
      .sort((a, b) => a.title.localeCompare(b.title))
      .slice(0, 20);

    setSerieData(filteredData);
  }, []);

  useEffect(() => {
    const data = getSeries();
    const filteredData = data
      .filter(item => item.releaseYear >= 2010 && item.programType === 'series')
      .sort((a, b) => a.title.localeCompare(b.title))
      .slice(0, 20);

    setSerieData(filteredData);
  }, []);

  const openModal = (movie) => {
    setSerieSelected(movie);
    setModalOpen(true);
  };

  const closeModal = () => {
    setSerieSelected(null);
    setModalOpen(false);
  };

  return (
    <React.Fragment>
     <div className='Container-title'>
        <h3 className='Title'>Popular Series</h3>
      </div>
      <div className="Grid-container">
        {seriesData.map(item => (
          <div key={item.title} className="Grid-item"
            onClick={() => openModal(item)}>
            <img className="Image-product" src={item.images['Poster Art'].url} alt={item.title} />
            <div className='Containar-title--product'>
              <span>{item.title}</span>
            </div>
          </div>
        ))}
      </div>

      {modalOpen && serieSelected && (
        <div>
        <div className="Background"> 
        </div>
          <div className="Modal-container">
              <img className="Image-modal"
                src={serieSelected.images['Poster Art'].url} 
                alt={serieSelected.title} />
              <div className='Contenier-info--modal'>
                <div className="Container-close--modal">
                  <CloseIcon 
                    className="Close-modal" onClick={closeModal}
                    data-testid="DeleteIcon"
                    title="Cerrar">
                  </CloseIcon >
                </div>
                <div className='Container-text--modal'>
                  <h3 className='Title-modal'>{serieSelected.title}</h3>
                  <span>Año: {serieSelected.releaseYear}</span>
                  <p className='Sinapsis'><span>Sinapsis:</span></p> 
                  <p>{serieSelected.description}</p>
                </div>
              </div>
          </div>
        </div>
      )}
    </React.Fragment>
  );
};

export { SeriesList };