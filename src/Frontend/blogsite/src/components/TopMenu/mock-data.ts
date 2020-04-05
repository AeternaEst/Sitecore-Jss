import { TopMenuProps } from "./index";
import { JssGraphQlComponentProps } from "../../types/sitecore/layoutServiceTypes";
import { homeMock, renderingMock } from "../../types/sitecore/mock-data";
import { socialRootMock } from "../../types/domain/SocialIcon/mock-data";

export const getTopMenuPropsMock = (): JssGraphQlComponentProps<TopMenuProps> => {
  return {
    fields: {
      data: {
        home: homeMock,
        social: socialRootMock,
      },
    },
    rendering: renderingMock,
  };
};
