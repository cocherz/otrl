import React from "react";
import { PrismicText, PrismicRichText } from "@prismicio/react";

const TechPill = ({ tech, i }) => {
  return(
    <div className="techPill" key={i}> 
      <PrismicText field={tech.tech} />
    </div>
  )
}

export const JobDesc = ({ job }) => {
  return (
    <section className="section-container">
    
    <PrismicRichText field={job.title_about_us} />
    
    <PrismicRichText field={job.copy_about_us} />
  
    <PrismicRichText field={job.title_offer} />
   
    <PrismicRichText field={job.offer_copy} />
    
    <PrismicRichText field={job.title_about_you} />
    
    <PrismicRichText field={job.copy_about_you} />
   
    <PrismicRichText field={job.key_skills} />
   
    <PrismicRichText field={job.copy_key_skills} />
   
    <PrismicRichText field={job.title_tools} />
    
    <div className="techPills">
      {job.technologies.map((technology, i) => (
       <TechPill tech={technology} key={i}/>
      ))}
    </div>
    </section>
  );
};
