import React from "react";
import { useEffect } from "react";
import { useSinglePrismicDocument} from "@prismicio/react";
import { ClientFeedbackSlider } from "../components/structure/common";
import { HomePageHeader } from "../components/home_page/HomePageHeader";
import { Layout } from "../components/Layout";
import { NotFound } from "./NotFound";
import { OurServices } from "../components/home_page/OurServices";

/**
 * Website homepage component
 */

export const HomePage = () => {
  const [home, homeState] = useSinglePrismicDocument("homepage");
  const [menu, menuState] = useSinglePrismicDocument("menu");

  const notFound = homeState.state === "failed" || menuState.state === "failed" ;

  useEffect(() => {
    if (homeState.state === "failed") {
      console.warn("Homepage document was not found. Make sure it exists in your Prismic repository.");
    }
  }, [homeState.state]);

  if (home && menu ) {
    return (
      <Layout wrapperClass="page-content homepage" menuDoc={menu} footerDoc={menu}>
        <HomePageHeader data={home.data} />
        <OurServices data={home.data} />
        <ClientFeedbackSlider />
      </Layout>
    );
  } else if (notFound) {
    return <NotFound />;
  }
  return null;
};
