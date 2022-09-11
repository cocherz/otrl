import { PrismicText } from "@prismicio/react";
import React from "react";

export const ClientImages = ({ image }) => {
  return (
    <section className="client-section">
      <div>
        <h3>
          <PrismicText field={image.image_tagline} />
        </h3>
      </div>
      <ol className="client-images">
        {image.client_image.map((pic, i) => {
            return(
              <li key={i}>
          <img className="client-image" src={pic.img.url} alt={pic.img.alt} />
          </li>
            )
        })}
      </ol>
    </section>
  );
};
