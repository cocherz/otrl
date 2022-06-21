import { useState } from "react";
import { PrismicText } from "@prismicio/react";
import { PrimaryButton } from "./common";
import {ReactComponent as CrossSVG} from "../../images/cross-close.svg"
import {ReactComponent as BurgerSVG} from "../../images/burger.svg"

import React from "react";
import { GATracker } from "./GoogleAnalytics";

const gaEvent = GATracker("Mobile-Header-click");

const BurgerMenu = ({ setIsNavExpanded, isNavExpanded }) => {
  return (
    <div className="mobile-nav" alt="menu">
      <button
        aria-label={isNavExpanded ? "menu is collapsed, tap to open" : "menu is open, tap to close"}
        className="hamburger"
        alt="menu"
        onClick={() => {
          setIsNavExpanded(!isNavExpanded);
        }}
      >
        {isNavExpanded ? <BurgerSVG /> :  <CrossSVG />}
      </button>
      <div className={isNavExpanded ? "mobile-menu expanded" : "mobile--menu"}></div>
    </div>
  );
};

export const MobileMenu = ({ menuLink,  }) => {
  return (
    <div className="mobile-menu-item" onClick={() => gaEvent(menuLink.link.url)}>
      <a href={menuLink.link.url} >
        <div>
        <PrismicText field={menuLink.label} />
        <span aria-hidden="true">
          {" "}
          <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 9L4.64645 5.35355C4.84171 5.15829 4.84171 4.84171 4.64645 4.64645L1 1" stroke="#D1D5DB" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </span>
        </div>
      </a>
    </div>
  );
};

export const MobileNav = ({ menuDoc }) => {
  const [isNavExpanded, setIsNavExpanded] = useState(true);

  if (menuDoc) {
    return (
      <nav className="" aria-label="Mobile navigation">
        <BurgerMenu isNavExpanded={isNavExpanded} setIsNavExpanded={setIsNavExpanded} />
        <section className={isNavExpanded ? "mobile-menu expanded" : "mobile--menu"}>
          <div className="mobile-menu-container" aria-modal="true">
            <ol className="mobile-menu-items section-container">
              {menuDoc.data.menu_links.map((menuLink, i) => (
                <li key={i} className={window.location.pathname === menuLink.link.url ? "bolden" : ""}>
                  <MobileMenu menuLink={menuLink}  />
                </li>
              ))}
                <PrimaryButton aria-label="Contact us, button" classNames="wide-btn section-container-tb" redirect="/contact-us" copy="Contact us" />
            </ol>
          </div>
        </section>
      </nav>
    );
  }
  return null;
};
