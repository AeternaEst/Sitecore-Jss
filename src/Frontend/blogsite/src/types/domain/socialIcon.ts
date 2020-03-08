import { SimpleField, LinkField } from "../sitecore/layoutServiceFieldTypes";

interface SocialIcon {
  name: SimpleField<string>;
  icon: SimpleField<string>;
  link: LinkField;
  applyThemeColor: SimpleField<boolean>;
}

export default SocialIcon;
