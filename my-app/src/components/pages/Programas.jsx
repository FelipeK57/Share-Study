import React from "react";
import "./Programas.css";
import ListaProgramas from "./datos/ListaProgramas";

export const Programas = () => {
  return (
    <div>
      <p className="p0">Programas academicos</p>
      <p className="p1">
        Información sobre los programas que oferta la universidad del valle de
        nivel tecnologico y profesional
      </p>
      <div className="infoP">
        <ListaProgramas />
      </div>
      <div className="footer">
        <p>sharestudy@gmail.com</p>
        <p>©2023 por Share Study</p>
      </div>
    </div>
  );
};
