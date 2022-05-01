import React from "react";

export const ActiveJobs = ({ job, i, icons }) => {
  return (
    <h5 className="active-job-container">
      <a href={"careers/" + job.uid}>
      <img className="job-img" src={job.data.job_image.url} alt={job.data.job_image.url} />
      <div className="job-title">
        <h3>{job.data.job_title[0].text}</h3>
      </div>
      <div className="pills-list">
        <div className="pill align-img">
          <div className="small-icon-container">
            <img src={icons.data.location.url} alt={icons.data.location.alt} />
          </div>
          {job.data.location}
        </div>
        <div className="pill align-img">
          <div className="small-icon-container">
            <img src={icons.data.location.url} alt={icons.data.location.alt} />
          </div>
          {job.data.office_or_remote}
        </div>
        <div className="pill align-img">
          <div className="small-icon-container">
              <img src={icons.data.coins.url} alt={icons.data.coins.alt} />
            </div>
            {job.data.salary[0].text}{" "}
        </div>

        <div className="pill align-img">
          <div className="small-icon-container">
            <img src={icons.data.person.url} alt={icons.data.person.alt} />
          </div>
          {job.data.con_or_perm}
        </div>
      </div>

      
        <b className="purple-text bold">Find out more and apply </b>{" "}
        <svg className="align-svg" width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M10.586 2.84305C10.2181 2.43117 9.58594 2.39555 9.17407 2.76348C8.76219 3.13142 8.72657 3.76358 9.0945 4.17546L11.745 7.14253H1C0.447715 7.14253 0 7.59025 0 8.14253C0 8.69482 0.447715 9.14253 1 9.14253H11.6466L9.11593 11.8013C8.73516 12.2014 8.75079 12.8343 9.15083 13.2151C9.55088 13.5959 10.1838 13.5802 10.5646 13.1802L14.691 8.84485C14.8692 8.66428 14.9792 8.41625 14.9792 8.14253C14.9792 7.94337 14.921 7.75781 14.8206 7.60194C14.7925 7.55819 14.7605 7.51612 14.7249 7.47618L10.586 2.84305Z"
            fill="#5B21B6"
          />
        </svg>
      </a>
    </h5>
  );
};
