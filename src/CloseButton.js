import React from 'react';

export const CloseButton = ({ onClose }) => (
  <span>
    <button className="close-button" onClick={onClose} aria-label="Close">
      <span aria-hidden>×</span>
    </button>
  </span>
);
