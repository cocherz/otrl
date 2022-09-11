import React from "react";

export const ShareVacany = ({ icons, job }) => {
  let shareJobTile = `${job.job_title[0].text} at OnTrack Retail`


  return (
    <section className="section-container-lr">
      <h2> Share this vacancy </h2>
      <div className="social-share-icons">
        <a href={`https://linkedin.com/sharing/share-offsite/?mini=true&url=${window.location.href}&title=${shareJobTile}%20role%20at%20Ontrack%20Retail&source=${window.location.hostname}`} aria-label="share this vacancy on linkedin">
          <img src={icons.linkedin.url} alt={icons.linkedin.alt} className="social-image"/>
        </a>
        <a href={`http://twitter.com/share?text=${shareJobTile}&url=${window.location.href}`} aria-label="share this vacancy on twitter">
          <img src={icons.twitter.url} alt={icons.twitter.alt} className="social-image"/>
        </a>
        <a href={`https://www.facebook.com/share.php?u=${window.location.href}`} aria-label="share this vacancy on facebook">
          <img src={icons.facebook.url} alt={icons.facebook.alt}  className="social-image"/>
        </a>
        <a href={`mailto:?subject=${shareJobTile}&body=${window.location.href}`} aria-label="share this vacancy via email">
          <img src={icons.emails.url} alt={icons.emails.alt} className="social-image"/>
        </a>
        {/* <a href="google.com" aria-label="share this vacancy on slack">
          <img src={icons.slack.url} alt={icons.slack.alt}/>
        </a> 
        // not possible to share via slack in the same manner as above
        */}
      </div>
    </section>
  );
};


// `linkedin.com/sharing/share-offsite/?mini=true&url=https://otrl.netlify.app/careers/businessanalyst&title=business&source=https://otrl.netlify.app`
