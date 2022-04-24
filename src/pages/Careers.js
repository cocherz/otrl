import { useEffect } from "react";
import {
  useSinglePrismicDocument,
  PrismicText,
  useAllPrismicDocumentsByType,
} from "@prismicio/react";
import { Layout } from "../components/Layout";
import { NotFound } from "./NotFound";
import React from "react";

import { OtherRole } from "../components/careers_page/OtherRole";
import { QuoteSection } from "../components/careers_page/CareerQuote";
import { ActiveJobs } from "../components/careers_page/activeJobs";

export const Careers = () => {
  const [menu, menuState] = useSinglePrismicDocument("menu");
  const [icons, iconState] = useSinglePrismicDocument("icons");
  const [footer, footerState] = useSinglePrismicDocument("footer");
  const [careers, careersState] = useSinglePrismicDocument("careers");
  const [jobs, jobsState] = useAllPrismicDocumentsByType("jobpost");

  const notFound =
    menuState.state === "failed" ||
    footerState.state === "failed" ||
    careersState.state === "failed" ||
    iconState.state === "failed" ||
    jobsState.state === "falied";

  useEffect(() => {
    if (careersState.state === "failed") {
      console.warn(
        "Careers document was not found. Make sure it exists in your Prismic repository."
      );
    }
  }, [careersState.state]);

  if (careers && menu && jobs && icons) {
    return (
      <Layout wrapperClass="homepage" menuDoc={menu} footerDoc={footer}>
        <section className="activeRoles">
          <h2 className="page-heading">
            <PrismicText field={careers.data.current_vacancies} />
          </h2>          
          <div className="active-jobs">
            {jobs.map((job, i) => (
              <ActiveJobs job={job} key={i} icons={icons} />
            ))}
          </div>
        </section>
        <section className="OtherRoles">
          <OtherRole
            OtherRoleCopy={careers.data.banner_copy}
            OtherRoleButtonCopy={careers.data.banner_button_copy}
          />
        </section>
        <QuoteSection data={careers.data} />


      </Layout>
    );
  } else if (notFound) {
    return <NotFound />;
  }
  return null;
};
