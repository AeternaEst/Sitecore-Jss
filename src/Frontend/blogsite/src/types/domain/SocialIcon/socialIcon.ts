import { Field, JssField, Link } from "../../sitecore/layoutServiceFieldTypes";
import { IconId } from "../../../components/Icon";

export interface SocialIcon {
  id: string;
  socialName: Field<string>;
  socialIcon: Field<IconId>;
  socialLink: Field<Link>;
  applyThemeColor: Field<boolean>;
}

export interface SocialIconJss {
  id: string;
  socialName: JssField<string>;
  socialIcon: JssField<IconId>;
  socialLink: JssField<Link>;
  applyThemeColor: JssField<boolean>;
}
