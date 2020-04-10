import { JssField } from "./layoutServiceFieldTypes";

export interface BaseSitecoreItem {
  id: string;
  name: string;
  displayName: string;
  url: string;
  pageTitle: JssField<string>;
  children: BaseSitecoreItem[];
}
