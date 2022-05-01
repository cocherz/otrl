import React from "react";
import { useEffect } from "react";
import {
  useSinglePrismicDocument,
  usePrismicDocumentByUID,
  PrismicText,
  PrismicImage,
} from "@prismicio/react";
import { Layout } from "../components/Layout";
import { NotFound } from "./NotFound";
import { ContactUsCopy } from "../components/contact_us_page/ContactModalCopy";
import { ClientImages } from "../components/contact_us_page/ClientImages";
import { ContactUsForm } from "../components/contact_us_page/ContactUsForm";

export const Contact = () => {
  const [menu, menuState] = useSinglePrismicDocument("menu");
  const [footer, footerState] = useSinglePrismicDocument("footer");
  const [contact, contactState] = useSinglePrismicDocument("contact");

  const notFound =
    menuState.state === "failed" ||
    footerState.state === "failed" ||
    contactState.state === "failed";

  useEffect(() => {
    if (contactState.state === "failed") {
      console.warn(
        "Careers document was not found. Make sure it exists in your Prismic repository."
      );
    }
  }, [contactState.state]);

  if (contact && menu) {
    console.log(contact);
    return (
      <Layout wrapperClass="homepage" menuDoc={menu} footerDoc={footer}>
        <div className="background">
            <section className="contact-us-container content-section-tb ">
              <div className="copy-and-images">
                <ContactUsCopy
                  header={contact.data.header_copy}
                  subHeader={contact.data.header_sub_copy}
                />
                <ClientImages image={contact.data} />
              </div>
              <ContactUsForm />
            </section>
        </div>
      </Layout>
    );
  } else if (notFound) {
    return <NotFound />;
  }
  return null;
};
