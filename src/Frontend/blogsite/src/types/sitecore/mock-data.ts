import { BaseSitecoreItem } from "./layoutServiceItemTypes";
import { ComponentRendering } from "@sitecore-jss/sitecore-jss/types/dataModels";

export const blogsMock: BaseSitecoreItem = {
  id: "blogs",
  displayName: "Blogs",
  name: "blogs",
  url: "/blogs",
  pageTitle: {
    jss: {
      value: "Blogs",
    },
  },
  children: [],
};

export const homeMock: BaseSitecoreItem = {
  id: "home",
  displayName: "Home",
  name: "home",
  url: "/",
  pageTitle: {
    jss: {
      value: "Blogify",
    },
  },
  children: [blogsMock],
};

export const renderingMock: ComponentRendering = {
  componentName: "mock",
};
