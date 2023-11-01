import React, { useState, useEffect } from 'react';
import { getMovies } from '../../../services/database';
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
            <img src={item.images['Poster Art'].url} alt={item.title} />
            <div className='Containar-title--product'>
              <p>{item.title}</p>
            </div>
          </div>
        ))}
      </div>

      {modalOpen && movieSelected && (
        <div className="Modal">
          <div className="Modal-container">
            <div className="Container-close--modal">
              <span className="Close-modal" onClick={closeModal}>X</span>
            </div>
            <img src={movieSelected.images['Poster Art'].url} 
              className='Img-movie'
              alt={movieSelected.title} />
            <h3>{movieSelected.title}</h3>
            <p>{movieSelected.description}</p>
            <p>{movieSelected.releaseYear}</p>
          </div>
        </div>
      )}
    </React.Fragment>
  );
};

export { MoviesList };



// import React, {  useState, useEffect } from 'react';
// import { getMovies } from '../../../services/database';
// import '../Programs.css';

// const MoviesList = () => {

//   const [moviesData, setMoviesData] = useState([]);
//   useEffect(() => {
//     // Obtiene datos del archivo que simula una base datos en lugar de hacer una solicitud HTTP
//     const data = getMovies();
//     // Filtra, ordena y obtiene los primeros 20 resultados
//     const filteredData = data
//       .filter(item => item.releaseYear >= 2010 && item.programType === 'movie')
//       .sort((a, b) => a.title.localeCompare(b.title))
//       .slice(0, 20);

//     setMoviesData(filteredData);
//   }, []);

//   return (
//     <React.Fragment>
//       {/* Este div debería ser parte del componente "Header" y cambiar su nombre con el estado */}
//       <div className='Container-title'>
//         <h3 className='Title'>Popular Movies</h3>
//       </div>

//       {/* Este div debería ser un componente "MoviesList" que traiga películas, series */}
//       <div className="grid-container">
//         {moviesData.map(item => (
//           <div key={item.title} className="grid-item">
//             <img src={item.images['Poster Art'].url} alt={item.title} />
//             <div className='Conteinar-title--product'>
//               <p>{item.title}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </React.Fragment>
//   );
// };

// export { MoviesList };