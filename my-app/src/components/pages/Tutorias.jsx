import React from "react";
import "./Tutorias.css";
import ListaTutorias from "./datos/ListaTutorias";
import img1 from "./Flecha_derecha.png";
import img2 from "./Flecha_izquierda.png";

export const Tutorias = () => {

  return (
    <div className="containerTutoria">
      <p className="tituloTutoria">Busca una tutoria</p>
      <div className="reservarTutoria">
        <button className="botonTutoriaGrupal"><a className="linkTutoriaGrupal" href="public\Logging.html">Solicitar tutoria individual</a></button>
        <h4> Tutorias programadas </h4>
        <button className="botonTutoriaIndividual"><a className="linkTutoriaGrupal" href="public\Logging.html">Solicitar tutoria grupal</a></button>
      </div>
      <div className="slider">
        <div className="blockArrow">
          <img className="flechas" src={img2} alt="flechaIzquierda" />{" "}
        </div>
        <div className="bloqueTutorias">
          <ListaTutorias />
        </div>
        <div className="blockArrow">
          <img className="flechas" src={img1} alt="flechaDerecha" />
        </div>
      </div>
      <div className="footer">
        <p>sharestudy@gmail.com</p>
        <p>©2023 por Share Study</p>
      </div>
    </div>
  );
};
