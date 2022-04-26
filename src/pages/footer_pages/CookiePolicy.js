import React from "react";
import { PrismicRichText, useSinglePrismicDocument } from "@prismicio/react";
import { Layout } from "../../components/Layout";
import { NotFound } from "../NotFound";

export const CookiePolicy = () => {
  const [menu, menuState] = useSinglePrismicDocument("menu");
  const [footer, footerState] = useSinglePrismicDocument("footer");
    const [foo, fooState] = useSinglePrismicDocument("foo_cp")

  const notFound = menuState.state === "failed" || footerState.state === "failed" || fooState === "failed";

if (menu && foo) {

    return (
      <Layout wrapperClass="homepage" menuDoc={menu} footerDoc={footer}>
        <section className="content-section section-container">
        <PrismicRichText field={foo.data.cookie_policy} />
        </section>
      </Layout>
    );
  } else if (notFound) {
    return <NotFound />;
  }
  return null;
};
