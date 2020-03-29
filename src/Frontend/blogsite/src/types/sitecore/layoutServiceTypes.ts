import { ComponentFactory } from "@sitecore-jss/sitecore-jss-react/types/components/sharedTypes";
import { ComponentRendering } from "@sitecore-jss/sitecore-jss/types/dataModels";

export interface JssComponentProps<T> {
  rendering: ComponentRendering;
  componentFactory: ComponentFactory;
  fields: T;
}

export interface JssGraphQlComponentProps<T, P> {
  fields?: {
    data: T;
  };
  params: P;
  sitecoreContext?: SitecoreContext<T>;
  rendering?: ComponentRendering;
  componentFactory?: ComponentFactory;
}

export interface JssGraphQlComponentPropsWithData<T, P>
  extends JssGraphQlComponentProps<T, P> {
  fields: {
    data: T;
  };
}

export interface SitecoreContext<T> {
  route: Route<T>;
  itemId: string;
  pageEditing: boolean;
  site: {
    name: string;
  };
  pageState: string;
  language: string;
  visitorIdentificationTimestamp?: number;
}

export interface Route<T> {
  databaseName: "available-in-connected-mode" | "master" | "web" | "core";
  deviceId: string;
  name: string;
  itemId: string;
  displayName?: string;
  itemLanguage: string;
  itemVersion: number;
  language: string;
  layoutId: string;
  templateId: string;
  templateName: string;
  visitorIdentificationTimestamp?: number;
  pageState: string;
  pageEditing: boolean;
  site: {
    name: string;
  };
  placeholders: any;
  fields: T;
}
