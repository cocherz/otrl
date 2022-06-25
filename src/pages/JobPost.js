import React from "react";
import { useEffect } from "react";
import { useSinglePrismicDocument, usePrismicDocumentByUID } from "@prismicio/react";
import { Layout } from "../components/Layout";
import { JobPageContent } from "../components/job_page/JobPageContent";
import { JobSummary } from "../components/job_page/JobSummary";
import { NotFound } from "./NotFound";
import { useParams } from "react-router-dom";
import { OtherRole } from "../components/careers_page/OtherRole";
import { QuoteSection } from "../components/careers_page/CareerQuote";
import { PrimaryButton } from "../components/structure/common";

export const JobPost = () => {
  const { uid } = useParams();

  const [menu, menuState] = useSinglePrismicDocument("menu");
  const [job, jobState] = usePrismicDocumentByUID("jobpost", uid);
  const [careers, careersState] = useSinglePrismicDocument("careers");

  const notFound = menuState.state === "failed" ||  careersState.state === "failed";

  useEffect(() => {
    if (jobState.state === "failed") {
      console.warn("Careers document was not found. Make sure it exists in your Prismic repository.");
    }
  }, [jobState.state]);

  if (job && menu && careers) {
    return (
      <Layout wrapperClass="homepage" menuDoc={menu} footerDoc={menu}>
        <div className="background">
          <section className="job-content content-section page-heading">
            <JobSummary job={job.data} icons={menu.data} />
            <div className="section-container desktop-hidden">
            <PrimaryButton classNames={"apply-btn desktop-hidden"} copy={"Apply"} clickAction={(e) => document.getElementById("pills").scrollIntoView()}/>
            </div>
            <JobPageContent job={job.data} icons={menu.data} />
          </section>
          <OtherRole OtherRoleCopy={careers.data.banner_copy} OtherRoleButtonCopy={careers.data.banner_button_copy} />
        </div>
        <QuoteSection data={careers.data} />
      </Layout>
    );
  } else if (notFound) {
    return <NotFound />;
  }
  return null;
};
