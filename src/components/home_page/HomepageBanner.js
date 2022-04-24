import React from "react";
import { PrismicText, PrismicLink } from "@prismicio/react";

/**
 * Homepage banner component
 */
export const HomepageBanner = ({ banner }) => (
  <section className="homepage-banner background">
    <div className="banner-content container">
      <h2 className="page-heading">
        <PrismicText field={banner.title} />
      </h2>
      <p className="banner-description">
        <span className="quoteMarks"> " </span>
        <PrismicText field={banner.tagline} />
        <span className="quoteMarks"> " </span>
      </p>
    </div>
  </section>
);
