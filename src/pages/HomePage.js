import React from "react";
import { useEffect } from "react";
import { useSinglePrismicDocument} from "@prismicio/react";
import { ClientFeedbackSlider } from "../components/structure/common";
import { HomePageHeader } from "../components/home_page/HomePageHeader";
import { Layout } from "../components/Layout";
import { NotFound } from "./NotFound";
import { OurServices } from "../components/home_page/OurServices";

export const HomePage = () => {

  const [home, homeState] = useSinglePrismicDocument("home_page");
  const [main, mainState] = useSinglePrismicDocument("main")

const notFound = homeState === "Failed" || mainState === "failed"

  useEffect(() => {
    if (homeState.state === "failed") {
      console.warn(`${main} Homepage document was not found. Make sure it exists in your Prismic repository.`);
    }
  }, [homeState.state]);


  if (main && home) {
    return (
      <Layout wrapperClass="page-content homepage" menuDoc={main} footerDoc={main}>
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
