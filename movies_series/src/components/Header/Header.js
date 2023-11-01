import React from 'react';
import './Header.css';

function Header() {
  return (
    <React.Fragment>
      <header>
        <div className='Container-element--header'>
          <h1 className='Title'>
            DEMO Streaming
          </h1>
          <div className='coontainer-buttons'>
            {/* Cada botón deberpia ser un componente */}
            <button className='Login Button' title='En construcción'>Login</button>
            <button className='Start Button' title='En construcción'>Start your free trial</button>
          </div>
        </div>
        {/* <div className='Container-title'>
          <h3 className='Title'>Popular Movies</h3>
        </div> */}
      </header>
    </React.Fragment>
  );
}

export { Header };