// eslint-disable-next-line no-unused-vars
import {
  CommonFieldTypes,
  SitecoreIcon,
  Manifest
} from "@sitecore-jss/sitecore-jss-manifest";

/**
 * Adds the BlogPost component to the disconnected manifest.
 * This function is invoked by convention (*.sitecore.js) when 'jss manifest' is run.
 * @param {Manifest} manifest Manifest instance to add components to
 */
export default function(manifest) {
  manifest.addComponent({
    name: "BlogPost",
    icon: SitecoreIcon.DocumentTag,
    fields: [
      { name: "title", type: CommonFieldTypes.SingleLineText },
      { name: "date", type: CommonFieldTypes.Date },
      { name: "category", type: CommonFieldTypes.SingleLineText },
      { name: "text", type: CommonFieldTypes.RichText },
      { name: "image", type: CommonFieldTypes.Image },
      { name: "imageHeading", type: CommonFieldTypes.SingleLineText },
      { name: "imageManchet", type: CommonFieldTypes.SingleLineText }
    ]
    /*
    If the component implementation uses <Placeholder> or withPlaceholder to expose a placeholder,
    register it here, or components added to that placeholder will not be returned by Sitecore:
    placeholders: ['exposed-placeholder-name']
    */
  });
}
