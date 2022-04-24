import { Header } from "./structure/Header";
import { Footer } from "./structure/Footer";
import React from "react";
/**
 * Default site layout component
 */
export const Layout = ({ wrapperClass, menuDoc, footerDoc, children }) => {
  return (
    <div className={wrapperClass}>
      <Header menuDoc={menuDoc} />
      {children}
      <Footer footerDoc={footerDoc}/>
    </div>
  );
};
