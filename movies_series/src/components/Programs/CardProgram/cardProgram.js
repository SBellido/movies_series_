import React, { useState } from 'react';

function CardProgram(props) {
  const [modalAbierto, setModalAbierto] = useState(false);

  const abrirModal = () => {
    setModalAbierto(true);
  };

  const cerrarModal = () => {
    setModalAbierto(false);
  };

  return (
    <div className="card">
      <img src={props.image.url} alt={props.title} />
      <h2>{props.title}</h2>
      <p>{props.description}</p>
      <p>{props.releaseYear}</p>
      <button onClick={abrirModal}>Abrir Modal</button>

      {modalAbierto && (
        <div className="modal">
          <div className="modal-contenido">
            <span className="cerrar-modal" onClick={cerrarModal}>
              X
            </span>
            <h3>{props.title}</h3>
            <p>{props.description}</p>
            <p>{props.releaseYear}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default CardProgram;
