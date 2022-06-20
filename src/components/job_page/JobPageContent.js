import React from "react";
import { JobDesc } from "./JobDesc";
import { ShareVacany } from "./ShareVacancy";
import { ApplicationForm } from "./ApplicationForm";

export const JobPageContent = ({ job, icons }) => {
  return (
    <section className="job-page-container">
      <div className="vLine mobile-hidden"></div>
      <div className="job-desc">
        <JobDesc job={job} className="job-desc" />
      </div>

      <div className="share-and-apply">
        <ShareVacany icons={icons} job={job}/>
        <ApplicationForm jobTitle={job.job_title[0].text}/>
        {console.log(job)}
        <div id="submitted" className="application-form">
        {" "}
        <h3> Thanks for applying for our {job.job_title[0].text} role! </h3>
      </div>
      </div>
    </section>
  );
};
