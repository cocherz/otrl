import React, { Component } from "react";
import { useEffect } from "react";
import { useSinglePrismicDocument } from "@prismicio/react";
import { Layout } from "../components/Layout";
import { NotFound } from "./NotFound";
import { OurClients, ClientFeedbackSlider } from "../components/structure/common";



export const TestPage = () => {
  const [menu, menuState] = useSinglePrismicDocument("menu");
  const [footer, footerState] = useSinglePrismicDocument("footer");
  const client = useSinglePrismicDocument(
    "clients_and_partners"
  );

  const notFound =
    menuState.state === "failed" ||
    footerState.state === "failed";

  // useEffect(() => {
  //   if (clientState.state === "failed") {
  //     console.warn(
  //       "Careers document was not found. Make sure it exists in your Prismic repository."
  //     );
  //   }
  // }, [clientState.state]);

  if (menu) {
    return (
      <Layout wrapperClass="homepage" menuDoc={menu} footerDoc={footer}>
        
      <ClientFeedbackSlider />
      <OurClients/>
      </Layout>
    );
  } else if (notFound) {
    return <NotFound />;
  }
  return null;
};
