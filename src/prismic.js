import * as prismic from "@prismicio/client";
export const repositoryName = "otrl";

export const client = prismic.createClient(repositoryName, {
  accessToken: "",
  
  routes: [
    {
      type: "main",
      path: "/ ",
    },
    // {
    //   type: "services",
    //   path: "/services",
    // },
    {
      type: "careers",
      path: "/careers",
    },
    {
      type: "contact_us_page",
      path: "/contact-us",
    },
    {
      type: "job_post",
      path: "/careers/:uid",
    },
    {
      type: "x_cookie_policy",
      path: "/cookie-policy",
    },
    {
      type: "x_privacy_policy",
      path: "/privacy-policy",
    },
    {
      type: "who_we_are",
      path: "/who-we-are",
    },
    // {
    //   type: "page",
    //   path: "/:uid",
    // },
  ],
});
