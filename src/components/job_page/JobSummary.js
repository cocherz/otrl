import { PrismicText } from "@prismicio/react";
import React from "react";

export const JobSummary = ({ job, i, icons }) => {
  return (
    <section className="job-headers section-container">
      <img className="job-img-large mobile-hidden" src={job.job_image.url} alt={job.job_image.src}/>
      <section className="jobCopy">
        <h2 className="subheading">
          <PrismicText field={job.job_title} key="0" />
        </h2>
        <div className="pills-row">
          <div className="pill align-img">
          <div className="small-icon-container ">
            <img src={icons.location.url} alt={icons.location.alt}  className="pill-icon"/>
            </div>{job.location}
          </div>
          <div className="pill align-img">
          <div className="small-icon-container">
            <img src={icons.location.url} alt={icons.location.alt}  className="pill-icon"/>
            </div>{job.office_or_remote}
          </div>
          <div className="pill align-img">
          <div className="small-icon-container">
            <img src={icons.coins.url} alt={icons.coins.alt}  className="pill-icon"/></div>
            <PrismicText field={job.salary} />
          </div>
          <div className="pill align-img">
          <div className="small-icon-container">
            <img src={icons.person.url} alt={icons.person.alt}  className="pill-icon"/>
            </div><span>{job.con_or_perm}</span>


          </div>
        </div>
      </section>
    </section>
  );
};
