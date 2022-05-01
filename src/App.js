import React, {useEffect } from 'react';
import ReactDOM from 'react-dom';
import { PrismicProvider, PrismicToolbar } from "@prismicio/react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";

import { client, repositoryName } from "./prismic";
import { HomePage } from "./pages/HomePage.test";
import { Careers } from "./pages/Careers";
import { Contact } from "./pages/Contact.test";
import { TestPage } from "./pages/testpage.test";
import { JobPost } from "./pages/JobPost";
import { NotFound } from "./pages/NotFound";
import { CookiePolicy } from "./pages/footer_pages/CookiePolicy";
import { PrivacyPolicy } from "./pages/footer_pages/PrivacyPolicy";
import { Preview } from "./pages/Preview";
import { WhoWeAre } from "./pages/WhoWeAre";


import ReactGA from "react-ga";
const TRACKING_ID = "UA-227506950-1";
ReactGA.initialize(TRACKING_ID);

export const App = () => {

  useEffect(() => {
    ReactGA.pageview(window.location.pathname === "/" ? "home" : window.location.pathname + window.location.search);
  }, []);


  return (
    <PrismicProvider client={client} internalLinkComponent={({ href, ...props }) => <Link to={href} {...props} />}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/who-we-are" element={<WhoWeAre />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/test-page" element={<TestPage />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/careers/:uid" element={<JobPost />} />
          <Route path="/preview" element={<Preview />} />
          <Route path="/cookie-policy" element={<CookiePolicy />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
      <PrismicToolbar repositoryName={repositoryName} />
    </PrismicProvider>
  );
};
