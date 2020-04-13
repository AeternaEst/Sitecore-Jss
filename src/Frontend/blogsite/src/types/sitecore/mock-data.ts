import { BaseSitecoreItem } from "./layoutServiceItemTypes";
import { ComponentRendering } from "@sitecore-jss/sitecore-jss/types/dataModels";
import { SitecoreContext } from "./layoutServiceTypes";

export const blogsMock: BaseSitecoreItem = {
  id: "blogs",
  displayName: "Blogs",
  name: "blogs",
  url: "/blogs",
  pageTitle: {
    jss: {
      value: "Blogs"
    }
  },
  children: []
};

export const homeMock: BaseSitecoreItem = {
  id: "home",
  displayName: "Home",
  name: "home",
  url: "/",
  pageTitle: {
    jss: {
      value: "Blogify"
    }
  },
  children: [blogsMock]
};

export const renderingMock: ComponentRendering = {
  componentName: "mock"
};

export const contextMock: SitecoreContext<any> = {
  itemId: "Fake Id",
  language: "en",
  pageEditing: false,
  pageState: "Normal",
  site: {
    name: "blog site"
  },
  route: {
    databaseName: "available-in-connected-mode",
    deviceId: "Fake Id",
    fields: {},
    itemId: "Fake Id",
    itemLanguage: "en",
    itemVersion: 1,
    language: "en",
    layoutId: "Fake Id",
    name: "Fake name",
    pageEditing: false,
    pageState: "Normal",
    placeholders: [],
    site: {
      name: "blog site"
    },
    templateId: "Fake Id",
    templateName: "Fake name"
  }
};
