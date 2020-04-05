import { Field, JssField, Link } from "../../sitecore/layoutServiceFieldTypes";

export interface SocialIcon {
  id: string;
  socialName: Field<string>;
  socialIcon: Field<string>;
  socialLink: Field<Link>;
  applyThemeColor: Field<boolean>;
}

export interface SocialIconJss {
  id: string;
  socialName: JssField<string>;
  socialIcon: JssField<string>;
  socialLink: JssField<Link>;
  applyThemeColor: JssField<boolean>;
}
