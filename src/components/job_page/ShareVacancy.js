import React from "react";
import { PrismicText } from "@prismicio/react";

export const ShareVacany = ({ icons }) => {
  return (
    <section className="section-container">
      <h2> Share this vacancy </h2>
      <div className="social-share-icons">
        <a href="google.com" title="share this vacancy on linkedin">
          <img src={icons.linkedin.url} />
        </a>
        <a href="google.com" title="share this vacancy on twitter">
          <img src={icons.twitter.url} />
        </a>
        <a href="google.com" title="share this vacancy on facebook">
          <img src={icons.facebook.url} alt="hello facebook" />
        </a>
        <a href="google.com" title="share this vacancy via email">
          <img src={icons.email.url} />
        </a>
        <a href="google.com" title="share this vacancy on slack">
          <img src={icons.slack.url} />
        </a>
      </div>
    </section>
  );
};
