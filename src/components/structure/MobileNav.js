import { useState } from "react";
import { PrismicLink, PrismicText } from "@prismicio/react";
import { PrimaryButton } from "./common";
import React from "react";
import { GATracker } from "./GoogleAnalytics";

const gaEvent = GATracker('Mobile-Header-click')

const BurgerSVG = () => {
  return (
    <svg width="19" height="13" viewBox="0 0 19 13" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0.5 1.25C0.5 0.835786 0.835786 0.5 1.25 0.5H17.75C18.1642 0.5 18.5 0.835786 18.5 1.25C18.5 1.66421 18.1642 2 17.75 2H1.25C0.835786 2 0.5 1.66421 0.5 1.25Z"
        fill="black"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0.5 6.5C0.5 6.08579 0.835786 5.75 1.25 5.75H17.75C18.1642 5.75 18.5 6.08579 18.5 6.5C18.5 6.91421 18.1642 7.25 17.75 7.25H1.25C0.835786 7.25 0.5 6.91421 0.5 6.5Z"
        fill="black"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0.5 11.75C0.5 11.3358 0.835786 11 1.25 11H17.75C18.1642 11 18.5 11.3358 18.5 11.75C18.5 12.1642 18.1642 12.5 17.75 12.5H1.25C0.835786 12.5 0.5 12.1642 0.5 11.75Z"
        fill="black"
      />
    </svg>
  );
};
const CrossSVG = () => {
  return (
    <svg 
    fillRule="evenodd"
        clipRule="evenodd" width="13" height="13" viewBox="0 0 13 13" fill="black" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M6.5 5.03966L2.75149 1.29128C2.56812 1.10793 2.32007 1.00326 2.06093 1.00002L2.06093 1H2.0578C1.77729 1 1.50827 1.11143 1.30992 1.30977C1.11157 1.50812 1.00013 1.77714 1.00013 2.05764H0.99996L1.0003 2.0669C1.00955 2.31651 1.11407 2.55307 1.29233 2.72799L5.06325 6.49877L1.29325 10.2301C1.29309 10.2302 1.29294 10.2304 1.29278 10.2306C1.19793 10.3236 1.12305 10.435 1.07273 10.558C1.02264 10.6805 0.997943 10.8118 1.00013 10.9441C1.00013 10.9433 1.00013 10.9425 1.00013 10.9417L6.5 5.03966ZM6.5 5.03966L10.2298 1.30999C10.3208 1.21396 10.4301 1.13707 10.5512 1.08384C10.6736 1.03005 10.8056 1.00154 10.9393 1.00002L10.9422 0.999984C11.2227 1 11.4917 1.11143 11.6901 1.30977C11.8879 1.50756 11.9992 1.77561 11.9999 2.05525C12.0021 2.18753 11.9774 2.31888 11.9273 2.44134C11.8769 2.56435 11.8021 2.67579 11.7072 2.76884C11.707 2.76899 11.7069 2.76913 11.7067 2.76927L7.93675 6.50059L11.7077 10.2714C11.8859 10.4463 11.9904 10.6829 11.9997 10.9325L12 10.9417H11.9999C11.9999 11.2222 11.8884 11.4912 11.6901 11.6896C11.4929 11.8867 11.226 11.998 10.9474 11.9993C10.8115 12.0043 10.6761 11.9813 10.5495 11.9317C10.4213 11.8816 10.3049 11.8053 10.2078 11.7077L10.2072 11.7072L6.49908 7.96062L2.76087 11.6987L6.5 5.03966Z"
        fill="black"
        stroke="black"
        stroke-width="0.5"
      />
    </svg>
  );
};

const BurgerMenu = ({ setIsNavExpanded, isNavExpanded }) => {
  
  return (
    <div className="mobile-nav" alt="menu">
      <button
        aria-label={isNavExpanded ? "menu is collapsed, tap to open" : "menu is open, tap to close" }
        className="hamburger"
        alt="menu"
        onClick={() => {
          setIsNavExpanded(!isNavExpanded);
        }}
      >
        {isNavExpanded ? <BurgerSVG /> : <CrossSVG />}
      </button>
      <div className={isNavExpanded ? "mobile-menu expanded" : "mobile--menu"}></div>
    </div>
  );
};

export const MobileMenu = ({ menuLink, i }) => {
  
  return (
    <li className="mobile-menu-item" onClick={() => gaEvent(menuLink.link.url)}>
        <PrismicLink field={menuLink.link} key={i}>
       
        <PrismicText field={menuLink.label} />
        <span aria-hidden="true">
          {" "}
          <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 9L4.64645 5.35355C4.84171 5.15829 4.84171 4.84171 4.64645 4.64645L1 1" stroke="#D1D5DB" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </span>
    </PrismicLink>
      </li>
  );
};

export const MobileNav = ({ menuDoc }) => {
  const [isNavExpanded, setIsNavExpanded] = useState(true);

  if (menuDoc) {
    return (
      <nav className=""
      aria-label="Mobile navigation"
      
      >
        <BurgerMenu isNavExpanded={isNavExpanded} setIsNavExpanded={setIsNavExpanded} />
        <div className={isNavExpanded ? "mobile-menu expanded" : "mobile--menu"}>
          <div className="mobile-menu-container" aria-modal="true">

            <ol className="mobile-menu-items">

              {menuDoc.data.menu_links.map((menuLink, i )=> (
                <div className={window.location.pathname === menuLink.link.url ? "bolden" : "" }>
                <MobileMenu menuLink={menuLink} key={i} />
                </div>
              ))}
              <PrimaryButton  aria-label="Contact us, button" classNames="wide-btn" redirect="/contact-us" copy="Contact us"/>
            </ol>

          </div>
        </div>
      </nav>
    );
  }
  return null;
};
