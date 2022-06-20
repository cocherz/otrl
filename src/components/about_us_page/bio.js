import React from "react";
import { PrismicText } from "@prismicio/react";
import { PrimaryButton } from "../structure/common";

/**
 * Homepage banner component
 */
export const Bio = ({ biopic }) => (
  <div className="meet_the_team_section">
    <div className="meet_the_team_title">
      <h2> Meet the team </h2>
    </div>
    <div className="flex">
      <ul className="card_grid" >
        {biopic.map((member, i) => (
          <li key={i} >
            <section className="team_member" >
              <img src={member.headshot.url} className="headshot centerImage padDown"  aria-label={"Image of " + member.full_name[0].text + ", " + member.job_title[0].text + "at Ontrack Retail"} alt=""/>
              <a href={member.linkedin_url.url}>
                <img src={member.linkedin.url} className="linkedinImage centerImage padDown" aria-label={"click here to find " + member.full_name[0].text + " on linkedin"} alt=""/>
              </a>
              <div className="title_job" aria-hidden="true" >
                <PrismicText field={member.full_name} />
                <span aria-hidden="true" > | </span>
                <PrismicText field={member.job_title} />
              </div>
              <div className="small-text">
                <PrismicText field={member.bio_copy} />
              </div>
            </section>
          </li>
        ))}
      </ul>
    </div>
    <a href="/careers" className="joinButton">
      <PrimaryButton classNames="purpleCTA" copy="Join the team" redirect="/careers"/>
    </a>
  </div>
);
