// eslint-disable-next-line no-unused-vars
import {
  CommonFieldTypes,
  SitecoreIcon,
  Manifest
} from "@sitecore-jss/sitecore-jss-manifest";
import packageJson from "../../../package.json";

/**
 * Adds the Styleguide-FieldUsage-ContentList component to the disconnected manifest.
 * This function is invoked by convention (*.sitecore.js) when 'jss manifest' is run.
 * @param {Manifest} manifest Manifest instance to add components to
 */
export default function(manifest) {
  manifest.addComponent({
    name: "SocialBar",
    icon: SitecoreIcon.ListStyle_numbered,
    fields: [
      {
        name: "socialLinks",
        type: CommonFieldTypes.ContentList,
        // this sets the root path in Sitecore that linked items can be selected from.
        // the path is based on the path the shared items are defined in, under /data/content.
        // Using 'source' is recommended to help content editors find the correct items to refer to,
        // unless they can refer to any item in the whole site.
        source: `dataSource=/sitecore/content/${packageJson.config.appName}/Content/Social`
      },
      {
        name: "shareText",
        type: CommonFieldTypes.SingleLineText
      }
    ]
  });
}
