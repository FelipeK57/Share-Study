import React from "react";
import "./Programa.css";
import { Link } from "react-router-dom";

const Programa = (props) => {
  return (
    <div className="containerPrograma">
      <img className="imagenPrograma" src={props.img} />
      <div className="bloquePrograma">
        <p className="nombrePrograma">{props.name}</p>
        <Link to="/infoPrograma">
          <button className="botonPrograma">Ir</button>
        </Link>
      </div>
    </div>
  );
};

export default Programa;
