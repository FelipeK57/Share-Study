import React from "react";
import "./Inicio.css";
import { Link } from "react-router-dom";
import img from "./imagen_del_home_1.jpg";
import img2 from "./imagen_del_home_2.jpg";
import img3 from "./imagen_del_home_3.jpg";

export const Inicio = () => {
  return (
    <>
      <div className="grid1">
        <div className="about">
          <h1 className="title">SOBRE SHARE STUDY</h1>
          <p className="info">
            Proyecto enfocado a brindar ayuda educativa de su interés en una
            pagina web. Contiene apuntes, artículos, foros, tutorías, catálogos
            de programas académicos y videos que facilitan la investigación
            sobre los cursos del programa académico que este interesado en
            estudiar o este cursando y la comunicación con personas que ofrecen
            un servicio de ayuda. (La información que se brinda al usuario esta
            enfocada a la Universidad del Valle)
          </p>
        </div>
        <div>
          <img className="image" src={img} alt="campusImagen" />
        </div>
      </div>
      <div className="recursos">
        <h3 className="title2">Recursos</h3>
      </div>
      <div className="grid2">
        <div className="block1">
          <img src={img2} className="image1" />
          <div className="linkblock">
            <Link className="links" to="/programas">
              PROGRAMAS ACADEMICOS
            </Link>
          </div>
        </div>
        <div className="block2">
          <img src={img3} className="image1" />
          <div className="linkblock">
            <Link className="links" to="/foro">
              FORO
            </Link>
          </div>
        </div>
      </div>
      <div className="block3">
        <ul className="block3-1">
          <li>
            <h1>Tutorias</h1>
          </li>
          <li>
            <p>
              Servicio brindado por estudiantes capacitados de ciertas areas
              academicas
            </p>
          </li>
          <li>
            <Link to="/tutorias">
              <button className="tutoriasBoton">IR</button>
            </Link>
          </li>
        </ul>
      </div>

      <div className="block4">
        <h1>CONTÁCTAME</h1>
        <p>Universidad Del Valle, Palmira, Valle del Cauca, Colombia</p>
        <p>sharestudy@gmail.com</p>
        <p>+57 318 217 3508</p>
      </div>

      <div className="footer">
        <p>sharestudy@gmail.com</p>
        <p>©2023 por Share Study</p>
      </div>
    </>
  );
};
