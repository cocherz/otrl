import { Header } from "./structure/Header";
import { Footer } from "./structure/Footer";
import React from "react";
/**
 * Default site layout component
 */
export const Layout = ({ wrapperClass, menuDoc, footerDoc, children }) => {

  var pageTitle = ""

  if(window.location.pathname === "/"){
    document.title = "OnTrack Retail"
  }
  else{
    document.title =  "OnTrack Retail" + " | " + (window.location.pathname.split("/")[1][0].toUpperCase() + window.location.pathname.split("/")[1].slice(1)).replaceAll("-", " ")
  }

      
  return (
    <div className={wrapperClass}>
      <Header menuDoc={menuDoc} />
      {children}
      <Footer footerDoc={footerDoc}/>
    </div>
  );
};
