import React from "react";
import { PrismicRichText } from "@prismicio/react";

export const Tagline = ({ tagline }) => {
  return (
    <div className="purpleText small-pad">
      <PrismicRichText field={tagline} />
    </div>
  );
};



export const KeyPoints = ({ copy, tagline }) => {
  return (
    <section className="about-us-points container">
      <div>
        <ul className="section-container">
          {copy.map((lineItem, i) => {
            return (
              <li key={i} className="bullet-point small-pad">
                {lineItem.text}
              </li>
            );
          })}
          <Tagline tagline={tagline} />
        </ul>
      </div>
    </section>
  );
};
