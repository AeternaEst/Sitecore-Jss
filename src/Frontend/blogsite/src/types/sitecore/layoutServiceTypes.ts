import { ComponentFactory } from "@sitecore-jss/sitecore-jss-react/types/components/sharedTypes";
import { ComponentRendering } from "@sitecore-jss/sitecore-jss/types/dataModels";

export interface JssComponent {
  rendering: ComponentRendering;
  componentFactory?: ComponentFactory;
}

export interface JssComponentProps<T> extends JssComponent {
  fields: T;
}

export interface JssComponentPropsWithParams<T, P> extends JssComponent {
  fields: T;
  params: P;
}

export interface JssGraphQlComponentProps<T> extends JssComponent {
  fields: {
    data: T;
  };
  sitecoreContext?: SitecoreContext<T>;
}

export interface JssGraphQlComponentPropsWithParams<T, P>
  extends JssGraphQlComponentProps<T> {
  params?: P;
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
