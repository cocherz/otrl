import React from "react";
import { PrismicText } from "@prismicio/react";

export const ContactUsCopy = ({ header, subHeader }) => {

  return (
    <section className="contact-us-page-title">
      <h1 >
        <PrismicText field={header} />
      </h1>
      
      <PrismicText field={subHeader} />
      
    </section>
  );
};
