import React from "react";
import { PrismicText } from "@prismicio/react";

/**
 * Homepage banner component
 */

export const AboutUsBanner = ({ banner }) => (
  <section className="homepage-banner background">
    <div className="banner-content section-container">
      <h1 className="page-heading-center">
        <PrismicText field={banner.title} />
      </h1>
      <blockquote className="banner-description">
        <span className="quoteMarks"> " </span>
        <PrismicText field={banner.tagline} />
        <span className="quoteMarks"> " </span>
      </blockquote>
    </div>
  </section>
);
