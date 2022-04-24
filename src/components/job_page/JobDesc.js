import React from "react";
import { PrismicText, PrismicRichText } from "@prismicio/react";

const TechPill = ({ tech, i }) => {
  return(
    <div className="techPill"> 
      <PrismicText field={tech.tech} />
    </div>
  )
}

export const JobDesc = ({ job }) => {
  return (
    <section className="section-container">
      <h2>
    <PrismicRichText field={job.title_about_us} />
    </h2>
    <div>
    <PrismicRichText field={job.copy_about_us} />
    </div>
    <h2>
    <PrismicRichText field={job.title_offer} />
    </h2>
    <div>
    <PrismicRichText field={job.offer_copy} />
    </div>
    <h2>
    <PrismicRichText field={job.title_about_you} />
    </h2>
    <div>
    <PrismicRichText field={job.copy_about_you} />
    </div>
    <h2>
    <PrismicRichText field={job.key_skills} />
    </h2>
    <div>
    <PrismicRichText field={job.copy_key_skills} />
    </div>
    <h2>
    <PrismicRichText field={job.title_tools} />
    </h2>
    <div className="techPills">
      {job.technologies.map((technology, i) => (
       <TechPill tech={technology} key={i}/>
      ))}
    </div>
    </section>
  );
};
