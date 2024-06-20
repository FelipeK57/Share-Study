import React from "react";  
import "./Modal.css";

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="overlay">
      <div className="modal">
        {children}
        <button className="close-modal" onClick={onClose}>
          Volver
        </button>
      </div>
    </div>
  );
};

export default Modal;
