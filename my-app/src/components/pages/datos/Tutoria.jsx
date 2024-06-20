import React from "react";
import "./Tutoria.css";

const Tutoria = (props) => {
  return (
    <div className="containerTutoria">
      <img className="imagenTutoria" src={props.imagen} />
      <div className="bloqueTutoria">
        <p className="nombreTutoria">Tutoria grupal de: </p>
        <p className="nombreTutoria">{props.nombre}</p>
        <p className="tiempoTutoria">{props.tiempo}</p>
        <p className="costoTutoria">{props.costo}</p>
        <p className="tutorTutoria">{props.tutor}</p>
        <button className="botonTutoria"><a className="linkTutoriaGrupal" href="public\Logging.html">Apuntarme</a></button>
      </div>
    </div>
  );
};

export default Tutoria;
