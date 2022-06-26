import { PrismicText, PrismicLink } from "@prismicio/react";
import { PrimaryButton } from "./common";
import { MobileNav } from "./MobileNav";
import React from "react";
import { GATracker } from "./GoogleAnalytics";
import { ReactComponent as LogoSVG } from "../../images/logo.svg";

const MenuLink = ({ menuLink, i }) => {
  const gaEvent = GATracker("Web-Header-click");
  console.log(menuLink)
  return (
    
    <PrismicLink field={menuLink.link} onClick={() => gaEvent(menuLink.link.uid)}>
       <div className={window.location.pathname.split("/")[1] === menuLink.link.uid ? "bolden centered-text" : "centered-text"}>
        <PrismicText field={menuLink.label}/>
      </div> 
    </PrismicLink>
    
  );
};

const NavItems = ({ items }) => {
  return (
    <nav className="mobile-hidden">
      <ul>
        {items.map((menuLink, i) => (
          <li key={i} className="centered-text">
            <MenuLink menuLink={menuLink} key={i} />
          </li>
        ))}
      </ul>
    </nav>
  );
};

export const Header = ({ menuDoc }) => {
  if (menuDoc) {
    const gaEvent = GATracker("Web-Header-click");
    return (
      <header className="fixed">
        <section className="site-header">
          <a className="logo" alt="logo" href="/">
            <LogoSVG aria-label="Ontrack Retail, press to go to home page" alt="logo" aria-describedby="hello" onClick={() => gaEvent("/home")} />
          </a>
          <section className="desktop-nav mobile-hidden">
            <NavItems items={menuDoc.data.menu_links} />
            <PrimaryButton classNames="header-button" redirect="/contact-us" copy="Contact Us" />
          </section>
          <section className="mobile-nav desktop-hidden">
            <MobileNav menuDoc={menuDoc} />
          </section>
        </section>
      </header>
    );
  }

  return null;
};
