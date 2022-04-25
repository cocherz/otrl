import { useSinglePrismicDocument } from "@prismicio/react";
import { PrismicText } from "@prismicio/react";
import { NotFound } from "../../pages/NotFound";
import React from "react";
import Slider from "react-slick";

export const PrimaryButton = ({ classNames, redirect, copy }) => {
  return (
    <a href={redirect}>
      <button className={`primary-button ${classNames}`}> {copy}</button>
    </a>
  );
};

export const OurClients = (show) => {
  const [client, clientState] = useSinglePrismicDocument("clients_and_partners");

  const notFound = clientState.state === "failed";

  if (client) {
    return (
      <section className="content-section">
        <h2 className="page-heading">
          <PrismicText field={client.data.clients_and_partners_title} />
        </h2>
        <section className="client-images-carosel">
          <Slider dots={false} autoplay={true} autoplaySpeed={3000} variableHeight={true} slidesToShow={5}>
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
                  <span className="quoteMarks"> " </span>
                  <PrismicText field={feedback.client_feedback} />
                  <span className="quoteMarks"> " </span>
                </p>
                <div className="title_job_feedback">
                  <PrismicText field={feedback.client_name} />
                  <span> | </span>
                  <PrismicText field={feedback.client_company_name} />
                </div>
                <img className="client-image-centered" src={feedback.client_logo.url} alt={feedback.client_logo.alt}/>
              </section>
            );
          })}
        </Slider>
      </section>
    );
  } else if (notFound) {
    return <NotFound />;
  }
  return null;
};
