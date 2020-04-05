export interface BaseSitecoreItem {
  id: string;
  name: string;
  displayName: string;
  url: string;
  children: BaseSitecoreItem[];
}
