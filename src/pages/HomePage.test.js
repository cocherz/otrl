import React from "react";
import { useEffect } from "react";
import { useAllPrismicDocumentsByType, usePrismicDocumentByID, useSinglePrismicDocument} from "@prismicio/react";
import { ClientFeedbackSlider } from "../components/structure/common";
import { HomePageHeader } from "../components/home_page/HomePageHeader";
import { Layout } from "../components/Layout";
import { NotFound } from "./NotFound";
import { OurServices } from "../components/home_page/OurServices";

/**
 * Website homepage component
 */

export const HomePage = () => {
  // const [home, homeState] = useSinglePrismicDocument("home_page");
  // const [main, menuState] = useSinglePrismicDocument("main");
  // const notFound = homeState.state === "failed" || menuState.state === "failed" ;

  // useEffect(() => {
  //   if (homeState.state === "failed") {
  //     console.warn(`${home} Homepage document was not found. Make sure it exists in your Prismic repository.`);
  //   }
  // }, [homeState.state]);

  const [home, homeState] = useSinglePrismicDocument("home_page");
  const [main, mainState] = useSinglePrismicDocument("main")
  const notFound = mainState.state === "failed" || homeState.state === "failed";

  useEffect(() => {
    if (homeState.state === "failed") {
      console.warn(`${main} Homepage document was not found. Make sure it exists in your Prismic repository.`);
    }
  }, [homeState.state]);





  if (main ) {
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
