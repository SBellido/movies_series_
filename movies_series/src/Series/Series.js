import React from 'react';
import { Link } from 'react-router-dom';

function Series() {
  const handleClick = () => {
    window.history.go(-1);
  };

  return (
    <div>
      <h1>Series</h1>
      <button onClick={handleClick}>Volver</button>
    </div>
  );
}

export { Series };