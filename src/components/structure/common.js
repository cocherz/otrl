import { useSinglePrismicDocument } from "@prismicio/react";
import { PrismicText, PrismicRichText } from "@prismicio/react";
import { NotFound } from "../../pages/NotFound";
import React from "react";
import Slider from "react-slick";
import { useState, useEffect } from 'react';



export default function useWindowDimensions() {

  const hasWindow = typeof window !== 'undefined';

  function getWindowDimensions() {
    const width = hasWindow ? window.innerWidth : null;
    const height = hasWindow ? window.innerHeight : null;
    return {
      width,
      height,
    };
  }

  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  useEffect(() => {
    if (hasWindow) {
      function handleResize() {
        setWindowDimensions(getWindowDimensions());
      }

      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }
  }, [hasWindow]);

  return windowDimensions;
}



export const PrimaryButton = ({ classNames, redirect, copy, clickAction }) => {
  return (
    <a href={redirect}>
      <button className={`primary-button ${classNames}`} onClick={clickAction} redirect={redirect}> {copy}</button>
    </a>
  );
};

export const OurClients = (show) => {
  const [client, clientState] = useSinglePrismicDocument("clients_and_partners");

  const notFound = clientState.state === "failed";

  const width = useWindowDimensions().width


  if (client) {
    
    return (
      <section className="partners-slider">
        <h2 className="center">
          <PrismicText field={client.data.clients_and_partners_title} />
        </h2>
        <section className="client-images-carosel">
          <Slider dots={false} autoplay={true} autoplaySpeed={3000} variableHeight={true} slidesToShow={width < 500 ? 1 : width < 700 ? 2 : 3}>
            {client.data.clients_and_partner_images.map((img, i) => {
              return (
                <li className="client-list" key={i}>
                  <img className="client-list-image" src={img.client_logo.url} key={i} alt="" />
                </li>
              );
            })}
          </Slider>
        </section>
      </section>
    );
  } else if (notFound) {
    return <NotFound />;
  }
  return null;
};

export const ClientFeedbackSlider = () => {
  const [client, clientState] = useSinglePrismicDocument("clients_and_partners");
  const notFound = clientState.state === "failed";

  if (client) {
    return (
      <section className="client-feedback section-container">
        <Slider dots={true} autoplay={false}>
          {client.data.body[0].items.map((feedback, i) => {
            return (
              <section key={i}>
                <p className="feedback-quote">
                  <span className="quoteMarks purple-text"> " </span>
                  <PrismicText field={feedback.client_feedback} />
                  <span className="quoteMarks purple-text"> " </span>
                </p>
                <div className="title-job-feedback">
                  <PrismicText field={feedback.client_name} />
                  <span className="purple-text bold"> | </span>
                  <PrismicRichText field={feedback.client_company_name} />
                </div>
                <img className="client-image-centered" src={feedback.client_logo.url} alt={feedback.client_logo.alt}/>
              </section>
            );
          })}
        </Slider>
      </section>
    );
  } else if (notFound) {
    return null
  }
  return null;
};
