import { PrismicText, PrismicLink } from "@prismicio/react";
import { PrimaryButton } from "./common";
import { MobileNav } from "./MobileNav";
import React from "react";

const HeaderLogo = ({ logo }) => {
  return (
    <div className="logo">
      <PrismicLink href="/">
        <img src={logo} alt="Ontrack Retail"/>
      </PrismicLink>
    </div>
  );
};

const MenuLink = ({ menuLink }) => {
  return (
    <li>
      <PrismicLink field={menuLink.link}>
        <PrismicText field={menuLink.label} />
      </PrismicLink>
    </li>
  );
};

const NavItems = ({ items }) => {
  return (
    <nav className="mobile-hidden">
      <ul>
        {items.map((menuLink) => (
          <MenuLink menuLink={menuLink} key={menuLink.link.id} />
        ))}
      </ul>
    </nav>
  );
};

export const Header = ({ menuDoc }) => {
  if (menuDoc) {
    return (
      <header className="sticky">
        <section className="site-header">
          <HeaderLogo logo={menuDoc.data.header_image.url} />
          <section className="desktopNav mobile-hidden">
            <NavItems items={menuDoc.data.menu_links} />
            <PrimaryButton
              classNames="header-button"
              redirect="/contact-us"
              copy="Contact Us"
            />
          </section>
          <section className="">
          <div className="mobile-nav desktop-hidden">
            <MobileNav menuDoc={menuDoc} />
          </div>
          </section>
        </section>  
      </header>
      
    );
  }

  return null;
};
