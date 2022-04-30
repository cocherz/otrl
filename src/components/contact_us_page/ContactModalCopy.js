import React from "react";
import { PrismicText } from "@prismicio/react";

export const ContactUsCopy = ({ header, subHeader }) => {

  return (
    <section className="contact-us-page-title">
      <h1 className="paddingDownMed">
        <PrismicText field={header} />
      </h1>
      <div className="paddingDownMed">
      <PrismicText field={subHeader} />
      </div>
    </section>
  );
};
