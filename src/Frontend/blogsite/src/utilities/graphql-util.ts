import { isDisconnectedMode } from "./layout-service";
import { JssGraphQlComponentProps } from "../types/sitecore/layoutServiceTypes";

export const getMockOrConnectedProps = <T, P>(
  getMock: () => JssGraphQlComponentProps<T, P>,
  props: JssGraphQlComponentProps<T, P>,
  componentName: string
): JssGraphQlComponentProps<T, P> => {
  if (isDisconnectedMode(props.sitecoreContext) || !props.fields?.data) {
    console.log(
      `disconnected or no data. Returning mock data for ${componentName}`
    );
    return getMock();
  }

  return props;
};
