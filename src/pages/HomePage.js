import React from "react";
import { useEffect } from "react";
import { PrismicText, useSinglePrismicDocument } from "@prismicio/react";
import { ClientFeedbackSlider, OurClients } from "../components/structure/common";
import { Layout } from "../components/Layout";
import { HomepageBanner } from "../components/home_page/HomepageBanner";
import { Bio } from "../components/home_page/bio";
import { KeyPoints, Tagline } from "../components/home_page/KeyPoints";
import { NotFound } from "./NotFound";

/**
 * Website homepage component
 */
export const HomePage = () => {
  const [biopic, bioState] = useSinglePrismicDocument("team");
  const [home, homeState] = useSinglePrismicDocument("homepage");
  const [menu, menuState] = useSinglePrismicDocument("menu");
  const [footer, footerState] = useSinglePrismicDocument("footer");

  const notFound =
    homeState.state === "failed" ||
    menuState.state === "failed" ||
    footerState.state === "failed" ||
    bioState.state === "failed";

  useEffect(() => {
    if (homeState.state === "failed") {
      console.warn(
        "Homepage document was not found. Make sure it exists in your Prismic repository."
      );
    }
  }, [homeState.state]);

  // Return the page if a document was retrieved from Prismic
  if (home && menu && biopic && footer) {
    return (
      <Layout wrapperClass="page-content homepage" menuDoc={menu} footerDoc={footer}>
      <div className="header-spacer"> </div>
        <HomepageBanner banner={home.data.homepage_banner[0]}/>
        <KeyPoints
          title={home.data.who_we_are}
          copy={home.data.who_we_are_bullets}
        />
        <KeyPoints
          title={home.data.what_we_do}
          copy={home.data.what_we_do_bullets}
        />
        <Tagline tagline={home.data.tagline} />
        <ClientFeedbackSlider />
        <Bio biopic={biopic.data.team_member} />
        <OurClients show={2} />
      </Layout>
    );
  } else if (notFound) {
    return <NotFound />;
  }
  return null;
};
