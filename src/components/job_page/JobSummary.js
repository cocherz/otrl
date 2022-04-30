import { PrismicText } from "@prismicio/react";
import React from "react";

export const JobSummary = ({ job, i, icons }) => {
  return (
    <section className="jobHeaders section-container">
      <img className="jobImageLarge mobile-hidden" src={job.job_image.url} alt={job.job_image.src}/>
      <section className="jobCopy">
        <h2 className="subheading">
          <PrismicText field={job.job_title} key="0" />
        </h2>
        <div className="pills-row">
          <div className="jobPill">
            <img src={icons.location.url} alt={icons.location.alt}/>
            {job.location}
          </div>
          <div className="jobPill">
            <img src={icons.location.url} alt={icons.location.alt}/>
            {job.office_or_remote}
          </div>
          <div className="jobPill">
            <img src={icons.coins.url} alt={icons.coins.alt}/>
            <PrismicText field={job.salary} />
          </div>
          <div className="jobPill">
            <img src={icons.person.url} alt={icons.person.alt}/>
            <span>{job.con_or_perm}</span> 
          </div>
        </div>
      </section>
    </section>
  );
};
