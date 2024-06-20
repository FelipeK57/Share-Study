import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Foro.css";

export const NavbarForo = () => {
  const [selectedTab, setSelectedTab] = useState("inicio");

  const handleTabClick = (tab) => {
    setSelectedTab(tab);
  };

  return (
    <div>
      <nav className="navbarForo">
        <ul className="linksForo">
          <li
            onClick={() => handleTabClick("Todas las entradas")}
            className={selectedTab === "Todas las entradas" ? "active" : ""}
          >
            Todas las entradas
          </li>
        </ul>
      </nav>
      <div className="layout">
        <h1>Foro</h1>
        <p>
          ¡Te damos la bienvenida! Écha un vistazo y únete a las discusiones.
        </p>
      </div>
      {selectedTab === "Todas las entradas" && <TodasEntradas />}
    </div>
  );
};

const TodasEntradas = () => {
  return (
    <div>
      <div className="bloqueCategoria">
        <Link to="/matematicas">
          <img
            className="imagenBloqueCategoria"
            src="src\components\pages\matematicas.jpeg"
          />
        </Link>
        <div className="infoBloqueCategoria">
          <p>Matematicas</p>
          <p>Preguntas y conversaciones sobre las matemáticas.</p>
        </div>
      </div>
    </div>
  );
};
