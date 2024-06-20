import React from "react";
import "./Apuntes.css";

export const Apuntes = () => {
  return (
    <>
      <h1 className="tituloApuntes">Apuntes</h1>
      <div className="panelApuntes">
        <div className="apuntesSemestre">
          <h3>Semestre: 1</h3>
          <p>
            Asignatura: Matematica Basica{" "}
            <a href="https://drive.google.com/drive/folders/1taFfxWV0vAakRG5sTwB_yLIdSnI0yuHY?usp=sharing">
              Ir
            </a>
          </p>
          <p>
            Asignatura: Fundamentos de programacion imperativa{" "}
            <a href="https://drive.google.com/drive/folders/1tSWvLPYfmF4emeDtcUXWjXkkk3yCr785?usp=sharing">
              Ir
            </a>
          </p>
        </div>

        <div className="apuntesSemestre">
          <h3>Semestre: 2</h3>
          <p>
            Asignatura: Fundamentos de programacion orientada a objetos{" "}
            <a href="https://drive.google.com/drive/folders/1zXgHusfWsW6TYoIa1wxA8zFW9nv20wYQ?usp=drive_link">
              Ir
            </a>
          </p>
          <p>
            Asignatura: Calculo monovariable{" "}
            <a href="https://drive.google.com/drive/folders/1HbSoF6uTIHz_AwdHXhd0ydCNX41_67rF?usp=drive_link">
              Ir
            </a>
          </p>
        </div>
        <div className="apuntesSemestre">
          <h3>Semestre: 3</h3>
        </div>
        <div className="apuntesSemestre">
          <h3>Semestre: 4</h3>
        </div>
        <div className="apuntesSemestre">
          <h3>Semestre: 5</h3>
        </div>
        <div className="apuntesSemestre">
          <h3>Semestre: 6</h3>
        </div>
      </div>
    </>
  );
};
