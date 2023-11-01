import React, { useState, useEffect } from 'react';
import { getMovies } from '../../../services/database';
import CloseIcon from '@mui/icons-material/Close';
import '../Programs.css';

const MoviesList = () => {
  const [moviesData, setMoviesData] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [movieSelected, setMovieSelected] = useState(null);

  useEffect(() => {
    const data = getMovies();
    const filteredData = data
      .filter(item => item.releaseYear >= 2010 && item.programType === 'movie')
      .sort((a, b) => a.title.localeCompare(b.title))
      .slice(0, 20);

    setMoviesData(filteredData);
  }, []);

  const openModal = (movie) => {
    setMovieSelected(movie);
    setModalOpen(true);
  };

  const closeModal = () => {
    setMovieSelected(null);
    setModalOpen(false);
  };

  return (
    <React.Fragment>
      <div className='Container-title'>
        <h3 className='Title'>Popular Movies</h3>
      </div>

      <div className="Grid-container">
        {moviesData.map(item => (
          <div key={item.title} className="Grid-item" 
            onClick={() => openModal(item)}>
            <img className="Image-product" src={item.images['Poster Art'].url} alt={item.title} />
            <div className='Containar-title--product'>
              <p>{item.title}</p>
            </div>
          </div>
        ))}
      </div>

      {modalOpen && movieSelected && (
        <div className="Modal">
          <div className="Modal-container">
            <img className="Image-modal"
              src={movieSelected.images['Poster Art'].url} 
              alt={movieSelected.title} />
            <div className='Contenier-info--modal'>
              <div className="Container-close--modal">
                <CloseIcon 
                  className="Close-modal" onClick={closeModal}
                  data-testid="DeleteIcon">
                </CloseIcon >
              </div>
              <div className='Container-text--modal'>
                <h3 className='Title-modal'>{movieSelected.title}</h3>
                <span>Año: {movieSelected.releaseYear}</span>
                <p className='Sinapsis'><span>Sinapsis:</span></p> 
                <p>{movieSelected.description}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </React.Fragment>
  );
};

export { MoviesList };