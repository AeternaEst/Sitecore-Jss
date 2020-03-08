/*
  Component Scaffolding Script
  This is a script that enables scaffolding a new JSS component using `jss scaffold <componentname>`.
  Edit this script if you wish to use your own conventions for component storage in your JSS app.
*/

/* eslint-disable no-throw-literal,no-console */

const fs = require("fs");
const path = require("path");
const chalk = require("chalk");

/*
  SCAFFOLDING SCRIPT
*/
const componentName = process.argv[2];

if (!componentName) {
  throw "Component name was not passed. Usage: jss scaffold <ComponentName>";
}

if (!/^[A-Z][A-Za-z0-9-]+$/.test(componentName)) {
  throw "Component name should start with an uppercase letter and contain only letters and numbers.";
}

const componentManifestDefinitionsPath = "sitecore/definitions/components";
const componentRootPath = "src/components";

let manifestOutputPath = null;

if (fs.existsSync(componentManifestDefinitionsPath)) {
  manifestOutputPath = scaffoldManifest();
} else {
  console.log(
    `Not scaffolding manifest because ${componentManifestDefinitionsPath} did not exist. This is normal for Sitecore-first workflow.`
  );
}

const componentOutputPath = scaffoldComponent();
const stylesOutputPath = scaffoldStyles();

console.log();
console.log(chalk.green(`Component ${componentName} has been scaffolded.`));
console.log(chalk.green("Next steps:"));
if (manifestOutputPath) {
  console.log(
    `* Define the component's data in ${chalk.green(manifestOutputPath)}`
  );
} else {
  console.log(
    `* Scaffold the component in Sitecore using '${chalk.green(
      `jss deploy component ${componentName} --allowedPlaceholders placeholder-for-component`
    )}, or create the rendering item and datasource template yourself.`
  );
}
console.log(
  `* Implement the React component in ${chalk.green(componentOutputPath)}`
);
console.log(`* Style the component in ${chalk.green(stylesOutputPath)}`);
if (manifestOutputPath) {
  console.log(
    `* Add the component to a route layout (/data/routes) and test it with ${chalk.green(
      "jss start"
    )}`
  );
} else {
  console.log(
    `* Deploy your app with the new component to Sitecore (${chalk.green(
      "jss deploy:watch"
    )} or ${chalk.green("jss deploy files")})`
  );
  console.log(
    `* Add the component to a route using Sitecore Experience Editor, and test it.`
  );
}

/*
  TEMPLATING FUNCTIONS
*/

function scaffoldStyles() {
  const className = componentName
    .split(/(?=[A-Z])/)
    .join("-")
    .toLowerCase();
  const stylesTemplate = `.${className} {

}`;

  const outputDirectoryPath = path.join(componentRootPath, componentName);

  const outputFilePath = path.join(outputDirectoryPath, "_styles.css");

  fs.writeFileSync(outputFilePath, stylesTemplate, "utf8");

  return outputFilePath;
}

function scaffoldComponent() {
  const exportVarName = componentName.replace(/[^\w]+/g, "");
  const propsName = `${componentName}Props`;
  const className = componentName
    .split(/(?=[A-Z])/)
    .join("-")
    .toLowerCase();

  const componentTemplate = `import React, { FunctionComponent } from 'react';
import { Text } from '@sitecore-jss/sitecore-jss-react';
import { SimpleField } from '../../types/sitecore/layoutServiceFieldTypes';
import { JssComponentProps } from '../../types/sitecore/layoutServiceTypes';
import "./_styles.css";

  interface ${propsName} {
    title: SimpleField<string>;
  }

  const ${componentName}: FunctionComponent<JssComponentProps<${propsName}>> = (props: JssComponentProps<${propsName}>): React.ReactElement => (
    <div className="${className}">
      <Text field={props.fields.title} />
    </div>
  );

export default ${exportVarName};
`;

  const outputDirectoryPath = path.join(componentRootPath, componentName);

  if (fs.existsSync(outputDirectoryPath)) {
    throw `Component path ${outputDirectoryPath} already existed. Not creating component.`;
  }

  fs.mkdirSync(outputDirectoryPath);

  const outputFilePath = path.join(outputDirectoryPath, "index.tsx");

  fs.writeFileSync(outputFilePath, componentTemplate, "utf8");

  return outputFilePath;
}

function scaffoldManifest() {
  const manifestTemplate = `// eslint-disable-next-line no-unused-vars
import { CommonFieldTypes, SitecoreIcon, Manifest } from '@sitecore-jss/sitecore-jss-manifest';

/**
 * Adds the ${componentName} component to the disconnected manifest.
 * This function is invoked by convention (*.sitecore.js) when 'jss manifest' is run.
 * @param {Manifest} manifest Manifest instance to add components to
 */
export default function(manifest) {
  manifest.addComponent({
    name: '${componentName}',
    icon: SitecoreIcon.DocumentTag,
    fields: [
      { name: 'heading', type: CommonFieldTypes.SingleLineText },
    ],
    /*
    If the component implementation uses <Placeholder> or withPlaceholder to expose a placeholder,
    register it here, or components added to that placeholder will not be returned by Sitecore:
    placeholders: ['exposed-placeholder-name']
    */
  });
}
`;

  const outputFilePath = path.join(
    componentManifestDefinitionsPath,
    `${componentName}.sitecore.js`
  );

  if (fs.existsSync(outputFilePath)) {
    throw `Manifest definition path ${outputFilePath} already exists. Not creating manifest definition.`;
  }

  fs.writeFileSync(outputFilePath, manifestTemplate, "utf8");

  return outputFilePath;
}
