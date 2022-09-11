import React from "react";
import { PrismicText } from "@prismicio/react";
import { PrimaryButton } from "../structure/common";

/**
 * Homepage banner component
 */
export const Bio = ({ biopic }) => (
  <div className="meet_the_team_section">
    <div className="meet_the_team_title">
      <h1> Meet the team </h1>
    </div>
    <div className="flex">
      <ul className="card_grid">
        {biopic.map((member, i) => (
          
            <li key={i}>
              <a href={member.linkedin_url.url} >
              <section className="team_member">
                <img
                  src={member.headshot.url}
                  className="headshot centerImage padDown"
                  alt={"Image of " + member.full_name[0].text + ", " + member.job_title[0].text + "at Ontrack Retail"}
                />
                <img src={member.linkedin.url} className="linkedinImage centerImage padDown" aria-label={"click here to find " + member.full_name[0].text + " on linkedin"} alt="" />
                <div className="title_job" aria-hidden="true">
                  <PrismicText field={member.full_name} />
                  <span aria-hidden="true"> | </span>
                  <PrismicText field={member.job_title} />
                </div>
                <div className="small-text">
                  <PrismicText field={member.bio_copy} />
                </div>
              </section> 
              </a>
            </li>
         
        ))}
      </ul>
    </div>
    <section className="joinButton"> 
      <PrimaryButton classNames="purpleCTA joinButton" copy="Join the team" redirect="/careers" />
      </section>
  </div>
);
