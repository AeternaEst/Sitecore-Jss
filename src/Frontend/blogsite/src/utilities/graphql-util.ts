import { isDisconnectedMode } from "./layout-service";
import { JssGraphQlComponentProps } from "../types/sitecore/layoutServiceTypes";

export const getMockOrConnectedProp = <T>(
  mock: T,
  props: JssGraphQlComponentProps<any>,
  propName: string
): T => {
  return isDisconnectedMode || !props.fields
    ? mock
    : props.fields.data[propName];
};
