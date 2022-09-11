import { useEffect } from "react";
import { useSinglePrismicDocument, PrismicText, useAllPrismicDocumentsByType } from "@prismicio/react";
import { Layout } from "../components/Layout";
import { NotFound } from "./NotFound";
import React from "react";

import { OtherRole } from "../components/careers_page/OtherRole";
import { QuoteSection } from "../components/careers_page/CareerQuote";
import { ActiveJobs } from "../components/careers_page/activeJobs";

export const Careers = () => {
  const [main, mainState] = useSinglePrismicDocument("main");
  const [careers, careersState] = useSinglePrismicDocument("careers");
  const [jobs, jobsState] = useAllPrismicDocumentsByType("job_post");

  const notFound = mainState.state === "failed"  || careersState.state === "failed" || jobsState.state === "falied";

  useEffect(() => {
    if (careersState.state === "failed") {
      console.warn("Careers document was not found. Make sure it exists in your Prismic repository.");
    }
  }, [careersState.state]);

  if (careers && main && jobs) {
    return  (
      <Layout wrapperClass="homepage" menuDoc={main} footerDoc={main}>
        
        <section className="active-roles bottom-padding">
          <h1 className="page-heading heading-background">
            <PrismicText field={main.data.current_vacancies} />
          </h1>
          <div className="flex">
            <div className="card_grid content">
              {jobs.map((job, i) => (
                <ActiveJobs job={job} key={i} icons={main.data} />
              ))}
            </div>
          </div>
        </section>
        <section className="OtherRoles">
          <OtherRole OtherRoleCopy={main.data.banner_copy} OtherRoleButtonCopy={main.data.banner_button_copy} />
        </section>
        <QuoteSection data={main.data} />
      </Layout>
    );
  } 
  if (notFound) {
    return <NotFound />;
  }
  return null;
};
