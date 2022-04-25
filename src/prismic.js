import * as prismic from "@prismicio/client";
// Fill in your repository name
export const repositoryName = "testingbuisnesssite";

export const client = prismic.createClient(repositoryName, {
  accessToken: "",
  
  routes: [
    {
      type: "homepage",
      path: "/ ",
    },
    {
      type: "careers",
      path: "/:uid",
    },
    {
      type: "contact",
      path: "/contact",
    },
    {
      type: "jobpost",
      path: "/careers/:uid",
    },
    {
      type: "homepage",
      path: "/who-we-are",
    },
    {
      type: "page",
      path: "/:uid",
    },
  ],
});
