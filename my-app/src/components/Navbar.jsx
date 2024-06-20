import React from "react";
import { Link } from "react-router-dom";
import img from "./campus.png";
import "./Navbar.css";
export const Navbar = () => {
  return (
    <nav>
      <Link to="/">
        <img className="logo" src={img} alt="campus" />
      </Link>
      <ul>
        <li>
          <Link className="programas" to="/programas">
            Programas
          </Link>
        </li>
        <li>
          <Link to="/foro">Foro</Link>
        </li>
        <li>
          <Link to="/tutorias">Tutorias</Link>
        </li>
        <li>
          <a className="log" href="public\Logging.html">Iniciar Sesion</a>
        </li>
      </ul>
    </nav>
  );
};
