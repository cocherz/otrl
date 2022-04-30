import React from "react";
import { PrismicText } from "@prismicio/react";
import { OurSericeCard } from "./OurServicesCard";
import { PrimaryButton } from "../structure/common";

export const OurServices = (data) => {
  console.log(data);
  return (
    <section className="background">
      <section className="content-section section-container-lr our-services ">
        <h2 className="center section-container-tb">
          <PrismicText field={data.data.body[0].primary.our_services_header} />
        </h2>
        <section className="our-service-cards">
          {data.data.body[0].items.map((item, i) => (
            <OurSericeCard data={item} key={i} />
          ))}
        </section>

        <div className="our-service-copy center">
          <PrismicText field={data.data.body[0].primary.our_services_copy} />
        </div>
        <div className="our-service-tagline section-container-tb center">
          <PrismicText field={data.data.body[0].primary.our_services_tagline} />
        </div>
        <div className="centered section-container-tb">
          <PrimaryButton classNames="header-button margin-centered" redirect="/contact-us" copy="Contact Us" />
        </div>
      </section>
    </section>
  );
};
