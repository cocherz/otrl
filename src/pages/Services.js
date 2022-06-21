import React from "react";
import { useEffect } from "react";
import { useSinglePrismicDocument, PrismicText } from "@prismicio/react";
import { PrimaryButton } from "../components/structure/common";
import { Layout } from "../components/Layout";
import { NotFound } from "./NotFound";
import { ServicePage } from "../components/services_page/ServicePage";

export const Services = () => {
  const [menu, menuState] = useSinglePrismicDocument("menu");
  const [icons] = useSinglePrismicDocument("icons");
  const [footer, footerState] = useSinglePrismicDocument("footer");
  const [home, homeState] = useSinglePrismicDocument("homepage");

  const notFound = menuState.state === "failed" || footerState.state === "failed" || homeState.state === "failed";

  useEffect(() => {
    if (homeState.state === "failed") {
      console.warn("Services document was not found. Make sure it exists in your Prismic repository.");
    }
  }, [homeState.state]);

  if (footer && menu && icons && home) {
    return (
      <Layout wrapperClass="homepage" menuDoc={menu} footerDoc={footer}>
        <section className="blue-backgroud"> 
        <ServicePage servicesArray={home.data.body[0].items} />
        <div >
          <PrismicText className="our-service-copy center" field={home.data.body[0].primary.our_services_copy} />
        </div>
        <div className="our-service-tagline section-container-tb center">
          <PrismicText field={home.data.body[0].primary.our_services_tagline} />
        </div>
        <div className="centered section-container-tb">
          <PrimaryButton classNames="header-button margin-centered" redirect="/contact-us" copy="Contact Us" />
        </div>
        </section>
      </Layout>
    );
  } else if (notFound) {
    return <NotFound />;
  }
  return null;
};
