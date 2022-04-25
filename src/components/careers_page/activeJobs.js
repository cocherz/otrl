import React from "react";

export const ActiveJobs = ({ job, i, icons }) => {

  return (
    <div className="active-job-container">
      <img className="jobImage" src={job.data.job_image.url} alt={job.data.job_image.url}/>
      <div className="jobTitle">
        <h3>{job.data.job_title[0].text}</h3>
      </div>
      <div className="pills-list">
        <div className="jobPill listPill">
          <img src={icons.data.location.url} alt={icons.data.location.alt}/>
          {job.data.location}
        </div>
        <div className="jobPill listPill">
          <img src={icons.data.location.url} alt={icons.data.location.alt}/>
          {job.data.office_or_remote}
        </div>
        <div className="jobPill listPill">
          <img src={icons.data.coins.url} alt={icons.data.coins.alt}/>
          {job.data.salary[0].text}
        </div>
        
        <div className="jobPill listPill">
          <img src={icons.data.person.url} alt={icons.data.person.alt}/>
          {job.data.con_or_perm}
        </div>
      </div>
      <a href={"careers/"+job.uid}>
      <div className="linkCTA"> {job.data.link_copy[0].text}</div>
      </a>
    </div>
  );
};
