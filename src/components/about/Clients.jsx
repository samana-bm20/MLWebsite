import React from "react";
import Fleet from "../../assets/About/fleet.png";
import Globe from "../../assets/About/canva.png";
import GIS from "../../assets/About/gisai.png";
import Aws from "../../assets/About/logos/aws.png";
import Birac from "../../assets/About/logos/birac.jpg";
import Drdo from "../../assets/About/logos/drdo.jpg";
import Esri from "../../assets/About/logos/esri.jpg";
import Harvard from "../../assets/About/logos/harvard.png";
import Iocl from "../../assets/About/logos/iocl.jpg";
import Nsdc from "../../assets/About/logos/nsdc.jpg";
import Isb from "../../assets/About/logos/logo-isb.jpg";
import Who from "../../assets/About/logos/who.jpg";
import Jio from "../../assets/About/logos/jio.jpg";
import Microsoft from "../../assets/About/logos/microsoft.png";
import Mit from "../../assets/About/logos/mit.jpg";
import Google from "../../assets/About/logos/google.jpg";
import Nature from "../../assets/About/logos/theNature.png";
import Cris from "../../assets/About/logos/crisTag.png";

const Clients = () => {
  return (
    <div className="marquee-container py-12 w-full overflow-hidden">
      <div className="marquee flex animate-marquee">
        {[
          Harvard,
          Aws,
          Birac,
          Drdo,
          Esri,
          Iocl,
          Nsdc,
          Isb,
          Who,
          Jio,
          Microsoft,
          Mit,
          Google,
          Nature,
          Cris,
        ].map((logo, index) => (
          <img
            key={index}
            src={logo}
            alt={`Logo ${index}`}
            className="logo px-6"
          />
        ))}
      </div>
    </div>
  );
};

export default Clients;
