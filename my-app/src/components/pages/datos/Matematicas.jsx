import React from "react";
import "./Matematicas.css";

export const Matematicas = () => {
  return (
    <div className="foroDiscusion">
      <h1 className="tituloDiscusion">Discusion : Matematicas</h1>
      <div className="inicioDiscusion">
        <p className="autorPrincipal">Usuario: Kevin</p>
        <h1 className="tituloDiscusion">Problema Matematico</h1>
        <p className="textoDiscusion">Cuanto es 1 + 1</p>
      </div>
      <div className="respuestasDiscusion">
        <h1>Respuestas</h1>
        <div className="comentario">
          <p> Usuario: Juan Diego Leon </p>
          <p>Comentario: 2</p>
        </div>
        <div className="comentario">
          <p> Usuario: Juan Camilo Gonzalez </p>
          <p>Comentario: Doj</p>
        </div>
      </div>
    </div>
  );
};
