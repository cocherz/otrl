import React from "react";
import { PrismicRichText, useSinglePrismicDocument } from "@prismicio/react";
import { Layout } from "../../components/Layout";
import { NotFound } from "../NotFound";
import { useEffect } from "react";

export const PrivacyPolicy = () => {
  const [menu, menuState] = useSinglePrismicDocument("menu");
  const [foo, fooState]  = useSinglePrismicDocument("foo_pp")
  const [footer, footerState] = useSinglePrismicDocument("footer");

  const notFound = menuState.state === "failed" || footerState.state === "failed" || fooState === "failed";
  
  
  useEffect(() => {
    if (fooState.state === "failed") {
      console.warn(
        "Careers document was not found. Make sure it exists in your Prismic repository."
      );
    }
  }, [fooState.state]);


  if (menu && foo) {
    return (
      <Layout wrapperClass="homepage" menuDoc={menu} footerDoc={footer}>
            <section className="content-section section-container">
                <PrismicRichText field={foo.data.privacy_policy} />
        </section>


      </Layout>
    );
  } else if (notFound) {
    return <NotFound />;
  }
  return null;
};
