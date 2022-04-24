import React from "react";
import { PrismicText } from "@prismicio/react";

/**
 * Homepage banner component
 */
export const Bio = ({ biopic }) => (
  <div className="meet_the_team_section">
    <div className="meet_the_team_title">
      <h2> Meet the team </h2>
    </div>
    <div className="bioContainer">
      <ul className="team_bio_grid">
        {biopic.map((member, i) => (
          <li key={i}>
            <section className="team_member">
              <img
                src={member.headshot.url}
                className="headshot centerImage padDown"
              />
              <a href={member.linkedin_url.url}>
                <img
                  src={member.linkedin.url}
                  className="linkedinImage centerImage padDown"
                />
              </a>
              <div className="title_job">
                <PrismicText field={member.full_name} />
                <span> | </span>
                <PrismicText field={member.job_title} />
              </div>
              <div className="bioCopy">
                <PrismicText field={member.bio_copy} />
              </div>
            </section>
          </li>
        ))}
      </ul>
    </div>

    <a href="/careers" className="joinButton">
      <button className="joinTheTeam purpleCTA">Join the team</button>
    </a>
  </div>
);
