import { ComponentFactory } from "@sitecore-jss/sitecore-jss-react/types/components/sharedTypes";
import { ComponentRendering } from "@sitecore-jss/sitecore-jss/types/dataModels";

export interface JssComponentProps<T> {
  rendering: ComponentRendering;
  componentFactory: ComponentFactory;
  fields: T;
}

export interface JssGraphQlComponentProps {
  fields: any;
  sitecoreContext?: any;
}
