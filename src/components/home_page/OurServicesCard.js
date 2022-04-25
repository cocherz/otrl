import React from "react";
import { PrismicText } from "@prismicio/react";

export const OurSericeCard = (data, key) => {
  return (
    <div className="our-service-card" key={key}>
      <img className="service-card-image centerImage" src={data.data.service_image.url} alt={data.data.service_image.alt}/>
      <div className="service_copy">
        <h4 className="center service-title">
          <PrismicText field={data.data.service_title} />
        </h4>
        <p className="small">
          <PrismicText field={data.data.service_copy} />
        </p>
      </div>
    </div>
  );
};
