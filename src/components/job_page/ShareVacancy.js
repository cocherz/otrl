import React from "react";

export const ShareVacany = ({ icons }) => {
  return (
    <section className="section-container">
      <h2> Share this vacancy </h2>
      <div className="social-share-icons">
        <a href="google.com" aria-label="share this vacancy on linkedin">
          <img src={icons.linkedin.url} alt={icons.linkedin.alt}/>
        </a>
        <a href="google.com" aria-label="share this vacancy on twitter">
          <img src={icons.twitter.url} alt={icons.twitter.alt}/>
        </a>
        <a href="google.com" aria-label="share this vacancy on facebook">
          <img src={icons.facebook.url} alt={icons.facebook.alt} />
        </a>
        <a href="google.com" aria-label="share this vacancy via email">
          <img src={icons.email.url} alt={icons.email.alt}/>
        </a>
        <a href="google.com" aria-label="share this vacancy on slack">
          <img src={icons.slack.url} alt={icons.slack.alt}/>
        </a>
      </div>
    </section>
  );
};
