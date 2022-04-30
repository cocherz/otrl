import React from "react";
import { JobDesc } from "./JobDesc";
import { ShareVacany } from "./ShareVacancy";
import { ApplicationForm } from "./ApplicationForm.test";

export const JobPageContent = ({ job, icons }) => {
  return (
    <section className="job-page-container">
      <div className="vLine mobile-hidden"></div>
      <div className="job-desc">
        <JobDesc job={job} className="job-desc" />
      </div>

      <div className="share-and-apply">
        <ShareVacany icons={icons} />
        <ApplicationForm jobTitle={job.job_title[0].text}/>
      </div>
    </section>
  );
};
