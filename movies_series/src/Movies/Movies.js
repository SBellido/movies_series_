import React from 'react';
import { Link } from 'react-router-dom';

function Movies() {
  const handleClick = () => {
    window.history.go(-1);
  };

  return (
    <div>
      <h1>Movies</h1>
      <button onClick={handleClick}>Volver</button>
    </div>
  );
}


export { Movies };