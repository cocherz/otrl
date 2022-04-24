import { PrismicText } from "@prismicio/react";
import React from "react";

export const OtherRole = ({ OtherRoleCopy, OtherRoleButtonCopy }) => (
  <section className="OtherRoles">
  <div className="bannerWide">
    <div className="careersBannerCopy">
      <PrismicText field={OtherRoleCopy} />
    </div>
    <div>
      <a href="/contact-us">
        <button className="buttonSecondary">
          <PrismicText field={OtherRoleButtonCopy} />
         </button>
      </a>
    </div>
  </div>
  </section>
);
