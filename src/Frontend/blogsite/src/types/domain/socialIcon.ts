import { SimpleField, LinkField } from "../sitecore/layoutServiceFieldTypes";

interface SocialIcon {
  socialName: SimpleField<string>;
  socialIcon: SimpleField<string>;
  socialLink: LinkField;
  applyThemeColor: SimpleField<boolean>;
}

export default SocialIcon;
