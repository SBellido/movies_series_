import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <h1>Home</h1>
      <Link to="/series">
        <div>
          <h2>Ir a la página de Series</h2>
        </div>
      </Link>
      <Link to="/movies">
        <div>
          <h2>Ir a la página de Películas</h2>
        </div>
      </Link>
    </div>
  );
}

export { Home };
