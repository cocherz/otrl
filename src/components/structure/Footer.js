import { PrismicText } from "@prismicio/react";
import React from "react";

const ImageLink = ({ imageLink }) => {
  return (
    <a href={imageLink.url.url} aria-label={imageLink.image.alt}>
      <li aria-hidden="true">
        <img className="social-image " src={imageLink.image.url} alt={imageLink.image.alt} />
      </li>
    </a>
  );
};

const ContactInfo = ({ footerData }) => {

  return (
    <section className="footer-contact-section">
      <div className="socials-container">
        <ul>
          {footerData.socials.map((imageLink, i) => (
            <ImageLink imageLink={imageLink} key={i} />
          ))}
        </ul>
      </div>
      <section className="footer-contact-details">
        <a href={`mailto:${footerData.email[0].text}`}>
          <h3 className="email">
            <PrismicText field={footerData.email} />
          </h3>
        </a>
        <a href={`tel:${footerData.phone.text}`}>
          <h3 className="phone">
            <PrismicText field={footerData.phone} />
          </h3>
        </a>
        <div className="otrl_copy">
          <PrismicText field={footerData.otrl_copy} />{" "}
          <a href="/contact-us">
            <span className="purple-text"> Contact us</span>
          </a>
        </div>
      </section>
    </section>
  );
};

const FooterLinkList = ({ lists }) => {
  return (
    <ul>
      <li>
      <a href={lists.link.url ? lists.link.url : "/" + lists.link.uid}>
        <PrismicText field={lists.page} />
      </a>
      </li>
    </ul>
  );
};

const FooterLinks = ({ footerTitle, footerLinks }) => {
  return (
    <section className="footer-links-section">
      <div className="footer-title">
        <strong>
          <PrismicText field={footerTitle} />
        </strong>
      </div>
      <div className="footer-links">
        {footerLinks.map((links, i) => (
          <FooterLinkList lists={links} key={i} />
        ))}
      </div>
    </section>
  );
};

export const Footer = ({ footerData }) => {
  if (footerData) {
    return (
      <footer className="footer-container">
        <div className="footer-content-container">
          <ContactInfo footerData={footerData} />
          <section className="footer-links-area">
            <FooterLinks footerTitle={footerData.company} footerLinks={footerData.company_links} />
            <FooterLinks footerTitle={footerData.services} footerLinks={footerData.services_links} />
            <FooterLinks footerTitle={footerData.legal} footerLinks={footerData.legal_links} />
          </section>
        </div>
        <section className="footer-copy">
          <div className="copyright">
            <PrismicText field={footerData.copyright} />
          </div>
          <address className="address">
            <PrismicText field={footerData.company_address} />
          </address>
        </section>
      </footer>
    );
  }

  return <p>footer not found</p>;
};
