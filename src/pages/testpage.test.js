import React from "react";
import { useSinglePrismicDocument } from "@prismicio/react";
import { Layout } from "../components/Layout";
import { NotFound } from "./NotFound";


export const TestPage = () => {
  const [menu, menuState] = useSinglePrismicDocument("menu");
  const [footer, footerState] = useSinglePrismicDocument("footer");

  const notFound = menuState.state === "failed" || footerState.state === "failed";


  if (menu) {
    return (
      null
    );
  } else if (notFound) {
    return <NotFound />;
  }
  return null;
};
