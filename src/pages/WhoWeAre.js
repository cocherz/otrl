import React from "react";
import { useEffect } from "react";
import { PrismicText, useSinglePrismicDocument } from "@prismicio/react";
import { ClientFeedbackSlider, OurClients } from "../components/structure/common";
import { Layout } from "../components/Layout";
import { Bio } from "../components/about_us_page/bio";
import { KeyPoints } from "../components/about_us_page/KeyPoints";
import { NotFound } from "./NotFound";
import { AboutUsBanner } from "../components/about_us_page/HomepageBanner";
/**
 * Website homepage component
 */
export const WhoWeAre = () => {
  const [home, homeState] = useSinglePrismicDocument("who_we_are");
  const [main, mainState] = useSinglePrismicDocument("main");

  const notFound = homeState.state === "failed" || mainState.state === "failed";

  useEffect(() => {
    if (homeState.state === "failed") {
      console.warn("Homepage document was not found. Make sure it exists in your Prismic repository.");
    }
  }, [homeState.state]);

  // Return the page if a document was retrieved from Prismic
  if (home && main) {
    return (
      <Layout wrapperClass="page-content homepage" menuDoc={main} footerDoc={main}>
        <AboutUsBanner banner={main.data.homepage_banner[0]} /> 
        <section className="key-points-container section-container content-section">
          <div className="bullet-points">
            <h3>
              <PrismicText field={main.data.who_we_are} />
            </h3>
            <KeyPoints title={main.data.who_we_are} copy={main.data.who_we_are_bullets} />
          </div>
          <div className="bullet-points">
            <h3>
              <PrismicText field={main.data.what_we_do} />
            </h3>
            <KeyPoints title={main.data.what_we_do} copy={main.data.what_we_do_bullets} tagline={main.data.tagline} />
          </div>
        </section>
        <Bio biopic={main.data.team_member} />
        <OurClients show={2} />
        <ClientFeedbackSlider />
      </Layout>
    );
  } else if (notFound) {
    return <NotFound />;
  }
  return null;
};
