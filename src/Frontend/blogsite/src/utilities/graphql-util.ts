import { isDisconnectedMode } from "./layout-service";
import {
  JssGraphQlComponentPropsWithParams,
  JssGraphQlComponentProps,
} from "../types/sitecore/layoutServiceTypes";

export const getMockOrConnectedProps = <T, P>(
  mock: JssGraphQlComponentPropsWithParams<T, P> | JssGraphQlComponentProps<T>,
  props: JssGraphQlComponentPropsWithParams<T, P> | JssGraphQlComponentProps<T>
): JssGraphQlComponentPropsWithParams<T, P> | JssGraphQlComponentProps<T> => {
  return isDisconnectedMode(props.sitecoreContext) || !props.fields?.data
    ? mock
    : (props as JssGraphQlComponentPropsWithParams<T, P>);
};
