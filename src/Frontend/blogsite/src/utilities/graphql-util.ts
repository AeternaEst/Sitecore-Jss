import { isDisconnectedMode } from "./layout-service";
import {
  JssGraphQlComponentPropsWithParams,
  JssGraphQlComponentProps,
} from "../types/sitecore/layoutServiceTypes";

export const getMockOrConnectedProps = <T, P>(
  mock: JssGraphQlComponentPropsWithParams<T, P> | JssGraphQlComponentProps<T>,
  props: JssGraphQlComponentPropsWithParams<T, P> | JssGraphQlComponentProps<T>,
  componentName: string
): JssGraphQlComponentPropsWithParams<T, P> | JssGraphQlComponentProps<T> => {
  if (isDisconnectedMode(props.sitecoreContext) || !props.fields?.data) {
    console.log(
      `disconnected or no data. Returning mock data for ${componentName}`
    );
    return mock;
  }

  return props as JssGraphQlComponentPropsWithParams<T, P>;
};
