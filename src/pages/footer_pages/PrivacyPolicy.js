import React from "react";
import { PrismicRichText, useSinglePrismicDocument } from "@prismicio/react";
import { Layout } from "../../components/Layout";
import { NotFound } from "../NotFound";
import { useEffect } from "react";

export const PrivacyPolicy = () => {
  const [main, mainState] = useSinglePrismicDocument("main");
  const [privacyDoc, privacyDocState]  = useSinglePrismicDocument("x_privacy_policy")
  

  const notFound = mainState.state === "failed" || privacyDocState.state === "failed";
  
  
  useEffect(() => {
    if (privacyDocState.state === "failed") {
      console.warn(
        "Careers document was not found. Make sure it exists in your Prismic repository."
      );
    }
  }, [privacyDocState.state]);


  if (main && privacyDoc) {
    return (
      <Layout wrapperClass="homepage" menuDoc={main} footerDoc={main}>
            <section className="content-section section-container">
                <PrismicRichText field={privacyDoc.data.privacy_policy} />
        </section>


      </Layout>
    );
  } else if (notFound) {
    return <NotFound />;
  }
  return null;
};
