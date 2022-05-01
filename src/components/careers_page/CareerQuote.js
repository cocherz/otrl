import React from "react";
import { PrismicText } from "@prismicio/react";

export const QuoteSection = ({ data }) => {
  return (
    <section className="company-quotes section-container">
      <div className="content-section">
        <h2>
          <PrismicText field={data.quotes_title} />
        </h2>
        <div className="CareerQuote">
          {data.quotes.map((data, i) => (
            <CareerQuote data={data} key={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export const CareerQuote = ({ data }) => (
  <div className="quoteSection">
    <div className="quoteCopy">
      <span className="quoteMarks"> " </span>
      <PrismicText field={data.quote} />
      <span className="quoteMarks"> " </span>
    </div>
    <div className="quoter-info">
      <div className="quoterImage">
        <img className="smallImg" src={data.quote_image.url} alt={data.quote_image.alt}/>
      </div>
      <div className="nameAndRole">
        <div className="quoteName">
          <strong>
            <PrismicText field={data.quote_name} />
          </strong>
        </div>
        <div className="quoteJobRole">
          <PrismicText field={data.quote_job_title} />
        </div>
      </div>
    </div>
  </div>
);
