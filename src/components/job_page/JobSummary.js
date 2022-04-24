import { PrismicText } from "@prismicio/react";
import React from "react";

export const JobSummary = ({ job, i, icons }) => {
  return (
    <section className="jobHeaders">
      <img className="jobImageLarge mobile-hidden" src={job.job_image.url} />
      <section className="jobCopy">
        <h2 className="subheading">
          <PrismicText field={job.job_title} key="0" />
        </h2>
        <div className="pills-row">
          <div className="jobPill">
            <img src={icons.location.url} />
            {job.location}
          </div>
          <div className="jobPill">
            <img src={icons.location.url} />
            {job.office_or_remote}
          </div>
          <div className="jobPill">
            <img src={icons.coins.url} />
            <PrismicText field={job.salary} />
          </div>
          <div className="jobPill">
            <img src={icons.person.url} />
            <span>{job.con_or_perm}</span> 
          </div>
        </div>
      </section>
    </section>
  );
};
