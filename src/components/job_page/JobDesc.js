import React from "react";
import { PrismicText, PrismicRichText } from "@prismicio/react";

const TechPill = ({ tech, i }) => {
  return (
    <div className="techPill" key={i}>
      <PrismicText field={tech.tech} />
    </div>
  );
};

export const BulletPoints = ({ copy }) => {
  return (
    <section className="bullet-points left-marg">
      <ul>
        {copy.map((lineItem, i) => {
          return (
            <li key={i} className="bullet-point small-pad">
              <h5>{lineItem.text}</h5>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export const JobDesc = ({ job }) => {
  return (
    <section className="section-container-lr">
      <PrismicRichText field={job.title_about_us} />
      <div className="section-container-tb">
        <PrismicText field={job.copy_about_us} />
      </div>

      <PrismicRichText field={job.title_offer} />
      <div className="section-container-tb">
        <BulletPoints copy={job.offer_copy} />
      </div>

      <PrismicRichText field={job.title_about_you} />
      <div className="section-container-tb">
        <PrismicText field={job.copy_about_you} />
      </div>

      <PrismicRichText field={job.key_skills} />
      <div className="section-container-tb">
        <BulletPoints copy={job.copy_key_skills} />
      </div>
      <PrismicRichText field={job.job_copy} /> 
      <PrismicRichText field={job.title_tools} />
      <div className="techPills" id="pills">
        {job.technologies.map((technology, i) => (
          <TechPill tech={technology} key={i} />
        ))}
      </div>
    </section>
  );
};
