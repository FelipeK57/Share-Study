import React, { useState } from "react";
import Tutoria from "./Tutoria";

const ListaTutorias = () => {
  const [tutorias, settutorias] = useState([
    {
      nombre: "Analisis y diseño de algoritmos I",
      imagen:
        "https://static.wixstatic.com/media/2fd079bb88774bbe8f9ae073791c9e01.jpg/v1/fill/w_290,h_290,fp_0.50_0.50,q_80,usm_0.66_1.00_0.01,enc_auto/2fd079bb88774bbe8f9ae073791c9e01.jpg",
      tiempo: "Tiempo: 60 minutos",
      costo: "Costo persona: $20000",

      tutor: "Juan Diego Leon",
    },
    {
      nombre: "Calculo monovariable",
      imagen:
        "https://static.wixstatic.com/media/11062b_0048a12b1efd41969114c604d25ea6b4~mv2.jpeg/v1/fill/w_290,h_290,fp_0.50_0.50,q_80,usm_0.66_1.00_0.01,enc_auto/11062b_0048a12b1efd41969114c604d25ea6b4~mv2.jpeg",
      tiempo: "Tiempo: 60 minutos",
      costo: "Costo persona: $10000",

      tutor: "Juan Camilo Gonzalez",
      horario: "10am-11am",
    },
    {
      nombre: "Matematica basica",
      imagen:
        "https://static.wixstatic.com/media/94529b508b40459fb23e9c35b7e7cc0c.jpg/v1/fill/w_290,h_290,fp_0.50_0.50,q_80,usm_0.66_1.00_0.01,enc_auto/94529b508b40459fb23e9c35b7e7cc0c.jpg",
      tiempo: "Tiempo: 90 minutos",
      costo: "Costo persona: $10000",
      tutor: "Kevin Bolaños",
    },
  ]);

  return (
    <div>
      {tutorias.map((tutoria, index) => {
        return (
          <Tutoria
            key={index}
            nombre={tutoria.nombre}
            imagen={tutoria.imagen}
            tiempo={tutoria.tiempo}
            costo={tutoria.costo}
            tutor={tutoria.tutor}
            modalidad={tutoria.modalidad}
          />
        );
      })}
    </div>
  );
};

export default ListaTutorias;
