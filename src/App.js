import React from "react";
import { PrismicProvider, PrismicToolbar } from "@prismicio/react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";

import { client, repositoryName } from "./prismic";
import { HomePage } from "./pages/HomePage";
import { Careers } from "./pages/Careers";
import { Contact } from "./pages/Contact.test";
import { TestPage } from "./pages/testpage.test";
import { JobPost } from "./pages/JobPost";
import { NotFound } from "./pages/NotFound";
import { Preview } from "./pages/Preview";

export const App = () => {
  return (
    <PrismicProvider
      client={client}
      internalLinkComponent={({ href, ...props }) => (
        <Link to={href} {...props} />
      )}
    >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/test-page" element={<TestPage />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/careers/:uid" element={<JobPost />} />
          <Route path="/preview" element={<Preview />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
      <PrismicToolbar repositoryName={repositoryName} />
    </PrismicProvider>
  );
};
