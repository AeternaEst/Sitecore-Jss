import {
  SitecoreIcon,
  Manifest,
  CommonFieldTypes,
} from "@sitecore-jss/sitecore-jss-manifest";
import fs from "fs";

const query = fs.readFileSync(
  "sitecore/definitions/components/NavigationBar.sitecore.graphql",
  "utf8"
);

/**
 * Adds the TopBar component to the disconnected manifest.
 * This function is invoked by convention (*.sitecore.js) when 'jss manifest' is run.
 * @param {Manifest} manifest Manifest instance to add components to
 */
export default function(manifest) {
  manifest.addComponent({
    name: "NavigationBar",
    graphQLQuery: query,
    icon: SitecoreIcon.DocumentTag,
    fields: [],
    params: [
      {
        name: "showSocialIcons",
        displayName: "Show Social Icons",
        type: CommonFieldTypes.Checkbox,
      },
    ],
    /*
    If the component implementation uses <Placeholder> or withPlaceholder to expose a placeholder,
    register it here, or components added to that placeholder will not be returned by Sitecore:
    placeholders: ['exposed-placeholder-name']
    */
  });
}
