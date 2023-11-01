import React, { useState } from 'react';

function CardProgram(props) {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalLOpen(false);
  };

  return (
    <div className="Card">
      <img src={props.image.url} alt={props.title} />
      <h2>{props.title}</h2>
      <p>{props.description}</p>
      <p>{props.releaseYear}</p>

      {modalAbierto && (
        <div className="Modal">
          <div className="Modal-container">
            <span className="Close-modal" onClick={closeModal}>
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

export { CardProgram };
