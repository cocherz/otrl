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

  const [main, mainState] = useSinglePrismicDocument("main");
  const [job, jobState] = usePrismicDocumentByUID("job_post", uid);
  const [careers, careersState] = useSinglePrismicDocument("careers");

  const notFound = mainState.state === "failed" || careersState.state === "failed" || jobState.state === "failed";

  const scrollToApply = () => {
    const applicationForm = document.getElementById("application-form");
    const yOffSet = -90
    const y = applicationForm.getBoundingClientRect().top + window.pageYOffset + yOffSet;
    window.scrollTo({top: y, behavior: 'smooth'});

    
  };

  useEffect(() => {
    if (jobState.state === "failed") {
      console.warn("Careers document was not found. Make sure it exists in your Prismic repository.");
    }
  }, [jobState.state]);

  if (job && main && careers) {
    return (
      <Layout wrapperClass="homepage" menuDoc={main} footerDoc={main}>
        <div className="background">
          <section className="job-content content-section page-heading">
            <JobSummary job={job.data} icons={main.data} />
            <div className="section-container desktop-hidden">
              <PrimaryButton classNames={"apply-btn desktop-hidden"} copy={"Apply"} clickAction={(e) => scrollToApply()} />
            </div>
            <JobPageContent job={job.data} icons={main.data} />
          </section>
          <OtherRole OtherRoleCopy={main.data.banner_copy} OtherRoleButtonCopy={main.data.banner_button_copy} />
        </div>
        <QuoteSection data={main.data} />
      </Layout>
    );
  } else if (notFound) {
    return <NotFound />;
  }
  return null;
};
