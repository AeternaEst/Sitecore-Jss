import { isDisconnectedMode } from "./layout-service";
import {
  JssGraphQlComponentProps,
  JssGraphQlComponentPropsWithData
} from "../types/sitecore/layoutServiceTypes";

export const getMockOrConnectedProps = <T, P>(
  mock: JssGraphQlComponentPropsWithData<T, P>,
  props: JssGraphQlComponentProps<T, P>
): JssGraphQlComponentPropsWithData<T, P> => {
  return isDisconnectedMode(props.sitecoreContext) || !props.fields?.data
    ? mock
    : (props as JssGraphQlComponentPropsWithData<T, P>);
};
