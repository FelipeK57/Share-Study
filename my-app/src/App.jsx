import { Navbar } from "./components/Navbar.jsx";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Foro } from "./components/pages/Foro.jsx";
import { Programas } from "./components/pages/Programas.jsx";
import { Inicio } from "./components/pages/Inicio.jsx";
import { Tutorias } from "./components/pages/Tutorias.jsx";
import InfoPrograma from "./components/pages/infoPrograma.jsx";
import Tutoria from "./components/pages/datos/Tutoria.jsx";
import { Matematicas } from "./components/pages/datos/matematicas.jsx";
import { Apuntes } from "./components/pages/datos/Apuntes.jsx";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/matematicas" element={<Matematicas/>}></Route>
        <Route path="/" element={<Inicio />}></Route>
        <Route path="/programas" element={<Programas />}></Route>
        <Route path="/tutorias" element={<Tutorias />}></Route>
        <Route path="/foro" element={<Foro />}></Route>
        <Route path="/infoPrograma" element={<InfoPrograma />}></Route>
        <Route path="/tutoria" element={<Tutoria />}></Route>
        <Route path="/apuntes" element={<Apuntes />}></Route>
      </Routes>
    </div>
  );
}

export default App;
