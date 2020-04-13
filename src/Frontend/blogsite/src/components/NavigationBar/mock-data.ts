import { NavigationBarProps, NavigationBarParams } from "./index";
import { JssGraphQlComponentProps } from "../../types/sitecore/layoutServiceTypes";
import {
  homeMock,
  renderingMock,
  contextMock
} from "../../types/sitecore/mock-data";
import { socialRootMock } from "../../types/domain/SocialIcon/mock-data";

export const getNavigationBarPropsMock = (): JssGraphQlComponentProps<
  NavigationBarProps,
  NavigationBarParams
> => {
  return {
    fields: {
      data: {
        home: homeMock,
        social: socialRootMock
      }
    },
    params: {
      showSocialIcons: showSocialIcons()
    },
    rendering: renderingMock,
    sitecoreContext: contextMock
  };
};

const showSocialIcons = (): string => {
  const path = document.location.pathname;
  const segments = path.split("/");
  const blogsIndex = segments.findIndex(
    segment => segment.toLocaleLowerCase() === "blogs"
  );
  return blogsIndex !== -1 && segments.length > blogsIndex ? "1" : "0";
};
