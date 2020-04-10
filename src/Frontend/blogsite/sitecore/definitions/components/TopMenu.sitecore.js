// eslint-disable-next-line no-unused-vars
import {
  CommonFieldTypes,
  SitecoreIcon,
  Manifest,
} from "@sitecore-jss/sitecore-jss-manifest";
import fs from "fs";

const query = fs.readFileSync(
  "sitecore/definitions/components/TopMenu.sitecore.graphql",
  "utf8"
);

/**
 * Adds the TopMenu component to the disconnected manifest.
 * This function is invoked by convention (*.sitecore.js) when 'jss manifest' is run.
 * @param {Manifest} manifest Manifest instance to add components to
 */
export default function(manifest) {
  manifest.addComponent({
    name: "TopMenu",
    graphQLQuery: query,
    icon: SitecoreIcon.DocumentTag,
    fields: [{ name: "searchText", type: CommonFieldTypes.SingleLineText }],
    /*
    If the component implementation uses <Placeholder> or withPlaceholder to expose a placeholder,
    register it here, or components added to that placeholder will not be returned by Sitecore:
    placeholders: ['exposed-placeholder-name']
    */
  });
}
