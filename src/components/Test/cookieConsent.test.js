import React, { useState, useEffect } from "react";
import { PrismicRichText, useSinglePrismicDocument } from "@prismicio/react";
import { Layout } from "../components/Layout";

import { set } from "react-ga";
import { GATracker } from "../components/structure/GoogleAnalytics";
import { emailValidate, validate } from "../components/structure/validation";

export const TestPage = ({ jobTitle }) => {
  const [main, mainState] = useSinglePrismicDocument("main");

  if (main) {
    return (
      <Layout wrapperClass="page-content homepage" menuDoc={main} footerDoc={main}>
        <section className="cc-pop-up">
         
            <h3 className="cc-title">{main.data.cookie_consent_pop_up_title[0].text}</h3>
            <div className="cc-copy">
              {main.data.cookie_consent_pop_up_copy[0].text + " "}
              <span className="cc-link">
                <a className="cc-href purple-text bolden" href="/cookie-policy">
                  Cookie policy
                </a>
              </span>
            </div>
          
          <div className="cc-buttons">
            <button className="btn reject-btn"> Reject </button>
            <button className="btn accept-btn"> Accept </button>
          </div>
        </section>
      </Layout>
    );
  }
  return null;
};
