import React from 'react';
import { Link } from 'react-router-dom';

function Movies() {
  const handleClick = () => {
    window.history.go(-1);
  };

  return (
    <div>
      <h1>Películas</h1>
      <button onClick={handleClick}>
        Volver
      </button>
    </div>
  );
}


export { Movies };