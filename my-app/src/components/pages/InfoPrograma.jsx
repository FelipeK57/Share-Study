import React, { useState } from "react";
import "./InfoPrograma.css";
import Modal from "./datos/Modal.jsx";
import { Link } from "react-router-dom";

const InfoPrograma = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <div>
      <div className="containerInfoPrograma">
        <h1 className="nombreInfoPrograma">
          Tecnologia en Desarrollo de Software
        </h1>
        <img
          className="imagenInfoPrograma"
          src="https://static.wixstatic.com/media/11062b_98f29e107b1548f8a3adf5e55c4f3e5c~mv2.jpg/v1/fill/w_368,h_300,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/11062b_98f29e107b1548f8a3adf5e55c4f3e5c~mv2.jpg"
        />
        <div className="botonesInfoPrograma">
          <a
            href="http://palmira.univalle.edu.co/tecnologia-en-desarrollo-desoftware "
            className="botonInfoPrograma"
          >
            Informacion UV
          </a>
          <a
            href="https://drive.google.com/file/d/1SaEalo_L6QkPoMJM43jOefDTjSLCRd5P/view?pli=1"
            className="botonInfoPrograma"
          >
            Pensum
          </a>
          <button onClick={openModal} className="botonInfoPrograma">
            Comunicacion
          </button>
          <Modal isOpen={isModalOpen} onClose={closeModal}>
            <div className="comunicacionPrograma">
              <h2>Contactos:</h2>
              <h3>Director de programa: </h3>
              <p>Nombre: Antonio Velez</p>
              <p>Telefono: 1234567890</p>
              <p>Correo Electronico: director-programa@correunivalle.edu.co</p>
              <h3>Tutores:</h3>
              <p>Nombre: Juan Diego Leon</p>
              <p>Telefono: 1234567892</p>
              <p>Correo Electronico: tutor@correunivalle.edu.co</p>
            </div>
          </Modal>
          <Link className="botonInfoPrograma" to="/apuntes">
            <button>Apuntes</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default InfoPrograma;
