import React from 'react'
import { PrismicText } from '@prismicio/react';


export const HomePageHeader = (home) => {
    return (
      <section className="section-container">
        <h2 className="heading">
          <PrismicText field={home.data.home_page_header} />
        </h2>
        <p className="copy-container-small">
          <PrismicText field={home.data.home_page_copy} />
        </p>
      </section>
    );
  };