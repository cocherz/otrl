import React from "react";
import { PrismicRichText, useSinglePrismicDocument } from "@prismicio/react";
import { Layout } from "../../components/Layout";
import { NotFound } from "../NotFound";

export const CookiePolicy = () => {
  const [main, mainState] = useSinglePrismicDocument("main");
  
  const [cookieDoc, cookieDocState] = useSinglePrismicDocument("x_cookie_policy")

  const notFound = mainState.state === "failed" || cookieDocState === "failed";

if (main && cookieDoc) {

    return (
      <Layout wrapperClass="homepage" menuDoc={main} footerDoc={main}>
        <section className="content-section section-container">
        <PrismicRichText field={cookieDoc.data.cookie_policy} />
        </section>
      </Layout>
    );
  } else if (notFound) {
    return <NotFound />;
  }
  return null;
};
