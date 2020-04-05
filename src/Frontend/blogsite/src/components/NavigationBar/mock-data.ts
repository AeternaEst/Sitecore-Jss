import { NavigationBarProps, NavigationBarParams } from "./index";
import { JssGraphQlComponentPropsWithParams } from "../../types/sitecore/layoutServiceTypes";
import { homeMock, renderingMock } from "../../types/sitecore/mock-data";
import { socialRootMock } from "../../types/domain/SocialIcon/mock-data";

export const getNavigationBarPropsMock = (): JssGraphQlComponentPropsWithParams<
  NavigationBarProps,
  NavigationBarParams
> => {
  return {
    fields: {
      data: {
        home: homeMock,
        social: socialRootMock,
      },
    },
    params: {},
    rendering: renderingMock,
  };
};
