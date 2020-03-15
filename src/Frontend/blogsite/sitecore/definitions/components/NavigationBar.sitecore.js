// eslint-disable-next-line no-unused-vars
import {
  CommonFieldTypes,
  SitecoreIcon,
  Manifest
} from "@sitecore-jss/sitecore-jss-manifest";
import packageJson from "../../../package.json";
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
    fields: []
    /*
    If the component implementation uses <Placeholder> or withPlaceholder to expose a placeholder,
    register it here, or components added to that placeholder will not be returned by Sitecore:
    placeholders: ['exposed-placeholder-name']
    */
  });
}
