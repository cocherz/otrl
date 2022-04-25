import React from "react";
import {PrismicText } from "@prismicio/react";


export const Tagline = ({ tagline }) => {
  return (
    <div className="section-container purpleText">
              <PrismicText field={tagline} />
    </div>
  );
};




export const KeyPoints = ({ title, copy }) => {
    return (
      <section className="about-us-points content-container section-container">
            <div>
            <h2>
              <PrismicText field={title} />
              </h2>
              <ul className="section-container">
              {copy.map((lineItem, i) => {
                  return (
                      <li key={i} className="bullet-point"> 
                         {lineItem.text}
                      </li>
                  )
              })}
              </ul>
            </div>
      </section>
    );
  };
  