import React from 'react';
import { IconTypes } from './IconTypes';

function CloseIcon({ onClose }) {
  return (
    <IconTypes
      type="close"
      color="gray"
      onClick={onClose}
    />
  );
}

export { CloseIcon };