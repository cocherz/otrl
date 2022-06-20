import { PrismicText } from "@prismicio/react";
import React from "react";

const ImageLink = ({ imageLink }) => {
  return (
    <li>
      <a href={imageLink.url} aria-label={"Find us on " + imageLink.image.alt + " here"}>
        <img className="footer-social-image" src={imageLink.image.url} alt={imageLink.image.alt} />
      </a>
    </li>
  );
};

const ContactInfo = ({ footerDoc }) => {
  return (
    <section className="footer-contact-section">
      <div className="socials-container">
        <ul>
          {footerDoc.socials.map((imageLink, i) => (
            <ImageLink imageLink={imageLink} key={i} />
          ))}
        </ul>
      </div>
      <section className="footer-contact-details">
        <a href={`mailto:${footerDoc.email[0].text}`}>
          <h3 className="email">
            <PrismicText field={footerDoc.email} />
          </h3>
        </a>
        <h3 className="phone">
          <PrismicText field={footerDoc.phone} />
        </h3>
        <div className="otrl_copy">
          <PrismicText field={footerDoc.otrl_copy} />{" "}
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
    <div>
      <a href={lists.link.url ? lists.link.url : "/" + lists.link.uid}>
        <PrismicText field={lists.page} />
      </a>
    </div>
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

export const Footer = ({ footerDoc }) => {
  if (footerDoc) {
    return (
      <footer className="footer-container">
        <div className="footer-content-container">
          <ContactInfo footerDoc={footerDoc.data} />
          <section className="footer-links-area">
            <FooterLinks footerTitle={footerDoc.data.company} footerLinks={footerDoc.data.company_links} />
            <FooterLinks footerTitle={footerDoc.data.services} footerLinks={footerDoc.data.services_links} />
            <FooterLinks footerTitle={footerDoc.data.legal} footerLinks={footerDoc.data.legal_links} />
          </section>
        </div>
        <section className="footer-copy">
          <div className="copyright">
            <PrismicText field={footerDoc.data.copyright} />
          </div>
          <div className="address">
            <PrismicText field={footerDoc.data.company_address} />
          </div>
        </section>
      </footer>
    );
  }

  return <p>footer not found</p>;
};
