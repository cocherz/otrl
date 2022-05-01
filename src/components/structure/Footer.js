import { PrismicText } from "@prismicio/react";
import React from "react";

const ImageLink = ({ imageLink }) => {
  return (
    <li >
      <a href={imageLink.url} aria-label={"Find us on " + imageLink.image.alt + " here"}>
        <img className="socialImage" src={imageLink.image.url} alt={imageLink.image.alt} />
      </a>
    </li>
  );
};

const ContactInfo = ({ footerDoc }) => {
  return (
    <section className="footer-contact-section">
      <div className="socialsContainer">
        <ul>
          {footerDoc.socials.map((imageLink, i) => (
            <ImageLink imageLink={imageLink} key={i} />
          ))}
        </ul>
      </div>
      <section className="footerContactDetails">
        <h3 className="email" >
          <PrismicText field={footerDoc.email} />
        </h3>
        <h3 className="phone">
          <PrismicText field={footerDoc.phone} />
        </h3>
        <div className="otrl_copy">
          <PrismicText field={footerDoc.otrl_copy} />
            <button className="contact-us footer-btn-copy">Contact us </button>
        </div>
      
      
      </section>
      
    </section>
  );
};

const FooterLinkList = ({ lists }) => {
  return (
    <div>
      <a href={lists.link.url ? lists.link.url : "/"+lists.link.uid }>
        <PrismicText field={lists.page} />
      </a>
    </div>
  );
};

const FooterLinks = ({ footerTitle, footerLinks }) => {
  return (
    <section className="linksSection">
      <div className="footerTitle">
      <strong>
          <PrismicText field={footerTitle} />
      </strong>
      </div>
      <div className="footerLinks">
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
      <footer className="footerContainer">
        <div className="footerContentContainer">
          <ContactInfo footerDoc={footerDoc.data} />
          <section className="footerLinksArea">
            <FooterLinks
              footerTitle={footerDoc.data.company}
              footerLinks={footerDoc.data.company_links}
            />
            <FooterLinks
              footerTitle={footerDoc.data.services}
              footerLinks={footerDoc.data.services_links}
            />
            <FooterLinks
              footerTitle={footerDoc.data.legal}
              footerLinks={footerDoc.data.legal_links}
            />
          </section>
        </div>
        <section className="footerCopy">
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
