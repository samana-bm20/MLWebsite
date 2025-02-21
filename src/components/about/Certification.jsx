import React from "react";
import cmmi from '../../assets/Certification/logo-cmmi.jpg'
import gem from '../../assets/Certification/logo-gem.jpg'
import iso9000 from '../../assets/Certification/logo-iso-9000.jpg'
import iso14000 from '../../assets/Certification/logo-iso-14000.jpg'
import iso from '../../assets/Certification/logo-iso.jpg'
import msme from '../../assets/Certification/logo-msme.jpg'
import nicsi from '../../assets/Certification/logo-nicsi.jpg'

const Certification = () => {
  return (
    <div className="marquee-container py-12 w-full overflow-hidden">
      <div className="marquee flex animate-marquee">
        {[
          cmmi,
          gem,
          iso9000,
          iso14000,
          iso,
          msme,
          nicsi,
        ].map((logo, index) => (
          <img
            key={index}
            src={logo}
            alt={`Logo ${index}`}
            className="logo px-16"
          />
        ))}
      </div>
    </div>
  );
};

export default Certification;