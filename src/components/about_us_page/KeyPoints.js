import React from "react";
import {PrismicText, PrismicRichText } from "@prismicio/react";


export const Tagline = ({ tagline }) => {
  return (
    <div className="purpleText small-pad">
              <PrismicRichText field={tagline} />
    </div>
  );
};




export const KeyPoints = ({ title, copy, tagline }) => {
    return (
      <section className="about-us-points container section-container">
            <div>
            <h3>
              <PrismicText field={title} />
              </h3>
              <ul className="section-container">
              {copy.map((lineItem, i) => {
                  return (
                      <li key={i} className="bullet-point small-pad"> 
                         {lineItem.text}
                      </li>
                  )
              })}
              <Tagline tagline={tagline} />
              </ul>
            </div>
      </section>
    );
  };
  