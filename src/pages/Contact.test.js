import React from "react";
import { useEffect } from "react";
import { useSinglePrismicDocument } from "@prismicio/react";
import { Layout } from "../components/Layout";
import { NotFound } from "./NotFound";
import { ContactUsCopy } from "../components/contact_us_page/ContactModalCopy";
import { ClientImages } from "../components/contact_us_page/ClientImages";
import { ContactUsForm } from "../components/contact_us_page/ContactUsForm.test";

export const Contact = () => {
  const [menu, menuState] = useSinglePrismicDocument("menu");
  const [contact, contactState] = useSinglePrismicDocument("contact");

  const notFound =
    menuState.state === "failed" ||
    contactState.state === "failed";

  useEffect(() => {
    if (contactState.state === "failed") {
      console.warn(
        "Careers document was not found. Make sure it exists in your Prismic repository."
      );
    }
  }, [contactState.state]);

  if (contact && menu) {
    return (
      <Layout wrapperClass="homepage" menuDoc={menu} footerDoc={menu}>
        <div className="background section-container-tb">
          
            <section className="contact-us-container margin-centered">
              <div className="contact-us-a">
                {" "}
                <ContactUsCopy
                  header={contact.data.header_copy}
                  subHeader={contact.data.header_sub_copy}
                />{" "}
              </div>
              <div className="contact-us-b">
                <ClientImages image={contact.data} />{" "}
              </div>
              <div className="contact-us-c">
                <div className="container-test"> 
                <ContactUsForm />{" "}
                </div>
              </div>
            </section>
        </div>
      </Layout>
    );
  } else if (notFound) {
    return <NotFound />;
  }
  return null;
};
