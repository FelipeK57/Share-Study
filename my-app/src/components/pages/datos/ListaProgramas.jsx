import React, { useState } from "react";
import Programa from "./Programa.jsx";

const ListaProgramas = () => {
  const [programas, setprogramas] = useState([
    {
      name: "Tec. en Desarrollo de software",
      img: "https://static.wixstatic.com/media/11062b_98f29e107b1548f8a3adf5e55c4f3e5c~mv2.jpg/v1/fill/w_368,h_300,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/11062b_98f29e107b1548f8a3adf5e55c4f3e5c~mv2.jpg"
    },
    {
      name: "Contaduria publica", 
      img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fusam.edu.mx%2Fwp-content%2Fuploads%2F2020%2F10%2Fcontaduria-2.jpg&f=1&nofb=1&ipt=bf798113116e9023a3ac127d0c8a44d31fbfb2320c16f79d0e0088d166d79a15&ipo=images"
    },
    {
      name: "Ingenieria Industrial",
      img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.ufidelitas.ac.cr%2Fwp-content%2Fuploads%2F2021%2F01%2F07082033%2FUniversidad-Fid%25C3%25A9litas-acreditada-para-formar-a-los-ingenieros-industriales-del-futuro.jpg&f=1&nofb=1&ipt=1962d11a3b47f0e518fed0c0caf04c37ff69098db9beb4357c648354302f7c5c&ipo=images"
    },
    {
      name: "Licenciatura en Educación Fisica",
      img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Firp-cdn.multiscreensite.com%2F3556541a%2Fdms3rep%2Fmulti%2Fimagen%2Beducacion%2Bfisica%2B2016.jpg&f=1&nofb=1&ipt=78c77dea39cf08bf94d2cb55d51a9400df439821239eb87c0d34410e3918bbd8&ipo=images"
    },
    {
      name: "Tec. en Electronica Industrial",
      img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fserviciostecnicosmovil.com%2Fwp-content%2Fuploads%2F2019%2F09%2Felectronica-1024x708.jpg&f=1&nofb=1&ipt=fe1c9660acd485de36de24efc861cd74ccd38a45811672462f1159ae928e85be&ipo=images"
    },
    {
      name: "Psicologia",
      img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.psicoactiva.com%2Fwp-content%2Fuploads%2F2016%2F03%2Fterapia-psicoanalisis.jpg&f=1&nofb=1&ipt=79b3dce897a83d1afb951adf4fa667fc904d1b635e1eb269e2674a7baead15d5&ipo=images"
    },
    {
      name: "Tec Agroambiental",
      img: "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.grupoagrosuma.com%2Fwp-content%2Fuploads%2F2019%2F07%2FQuienes_somos.jpg&f=1&nofb=1&ipt=39c2d4af4bccffaefb6a454ed8658430a831d1efd813978ae6a528399a59e538&ipo=images"
    }

  ]);

  return (
    <div>
      {programas.map((programa, index) => {
        return (
          <Programa key={index} name={programa.name} img={programa.img} />
        );
      })}
    </div>
  );
};

export default ListaProgramas;