import { PrismicRichText } from "@prismicio/react";
import { AffiliateRetailingImage, BespokeDevImage, WebImage, ConsultancyImage } from "./components";
import React from "react";

export const ServicePage = ({ servicesArray }) => {
  return (
    <section className="service-page">
      <div className="dev-service service-section">
          <BespokeDevImage />
        <div className="service-info centered-text ">
          <PrismicRichText field={servicesArray[0].service_title} />
          <PrismicRichText field={servicesArray[0].service_copy} />
        </div>
      </div>
      <div className="webtis-service service-section">
         <div className="service-info centered-text">
          <PrismicRichText field={servicesArray[2].service_title} />
          <PrismicRichText field={servicesArray[2].service_copy} />
        </div>
         <WebImage />
      </div>
      <div className="consultancy-service service-section">
         <ConsultancyImage />
         <div className="service-info centered-text">
          <PrismicRichText field={servicesArray[1].service_title} />
          <PrismicRichText field={servicesArray[1].service_copy} />
        </div>
      </div>
      <div className="afflitate-service service-section">
         <div className="service-info centered-text">
          <PrismicRichText field={servicesArray[3].service_title} />
          <PrismicRichText field={servicesArray[3].service_copy} />
        </div>
        <AffiliateRetailingImage />
      </div>
     
    </section>
  );
};
