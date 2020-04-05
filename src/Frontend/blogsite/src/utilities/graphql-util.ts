import { isDisconnectedMode } from "./layout-service";
import { JssGraphQlComponentPropsWithParams } from "../types/sitecore/layoutServiceTypes";

export const getMockOrConnectedProps = <T, P>(
  mock: JssGraphQlComponentPropsWithParams<T, P>,
  props: JssGraphQlComponentPropsWithParams<T, P>
): JssGraphQlComponentPropsWithParams<T, P> => {
  return isDisconnectedMode(props.sitecoreContext) || !props.fields?.data
    ? mock
    : (props as JssGraphQlComponentPropsWithParams<T, P>);
};
