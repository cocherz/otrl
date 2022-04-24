import React from "react";
import { JobDesc } from "./JobDesc";
import { ShareVacany } from "./ShareVacancy";
import { ApplicationForm } from "./ApplicationForm";

export const JobDescription = ({ job, icons }) => {
  return (
    <div className="job-page-container">
      <div className="vLine mobile-hidden"></div>
      <div className="job-desc">
        <JobDesc job={job} className="job-desc" />
      </div>

      <div className="share-and-apply">
        <ShareVacany icons={icons} />
        <ApplicationForm />
      </div>
    </div>
  );
};
