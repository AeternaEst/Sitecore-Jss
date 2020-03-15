// eslint-disable-next-line no-unused-vars
import {
  CommonFieldTypes,
  Manifest
} from "@sitecore-jss/sitecore-jss-manifest";

/**
 * This is the data template for an individual _item_ in the Styleguide's Content List field demo.
 * @param {Manifest} manifest Manifest instance to add components to
 */
export default function(manifest) {
  manifest.addTemplate({
    name: "SocialIcon",
    fields: [
      { name: "socialName", type: CommonFieldTypes.SingleLineText },
      { name: "socialLink", type: CommonFieldTypes.GeneralLink },
      { name: "socialIcon", type: CommonFieldTypes.SingleLineText },
      { name: "applyThemeColor", type: CommonFieldTypes.Checkbox }
    ]
  });
}
