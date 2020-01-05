import React from "react";
import {
  Text,
  Image,
  withSitecoreContext
} from "@sitecore-jss/sitecore-jss-react";
import { Link as RouterLink } from "react-router-dom";

import "./_styles.css";
import { JssGraphQlComponentProps } from "../../types/sitecore/layoutServiceTypes";

/* Find solution to implement later */
// interface NavigationData {
//   dataSource: {
//     id: string;
//     name: string;
//     title: JssField<string>;
//     manchet: JssField<string>;
//     logo: JssField<RenderedSitecoreField>;
//   },
//   contextItem: {
//     id: string;
//     url: string;
//     children: {
//       id: string;
//       url: string;
//       name: string;
//     }[],
//     home: {
//       id: string;
//       url: string;
//       children: {
//         id: string;
//         url: string;
//         name: string;
//       }[]
//     }
//   }
// }

const Navigation: React.FunctionComponent<JssGraphQlComponentProps> = (
  props: JssGraphQlComponentProps
): React.ReactElement => {
  console.log("Navigation", props);

  const disconnectedMode =
    props.sitecoreContext.route.databaseName === "available-in-connected-mode";

  const getProp = (propName: string) => {
    return disconnectedMode
      ? props.fields[propName]
      : props.fields.data.datasource[propName].jss;
  };

  return (
    <div className="navigation">
      <div className="navigation__left">
        <RouterLink to={!disconnectedMode ? props.fields.data.home.url : "/"}>
          <Image field={getProp("logo")} height="75px" width="200px" />
        </RouterLink>
        <h1 className="navigation__title">
          <Text field={getProp("title")} />
        </h1>
        <span className="navigation__manchet">
          <Text field={getProp("manchet")} />
        </span>
      </div>
      <div className="navigation__right">
        {disconnectedMode && (
          <span>Links are only available in connected/integrated mode</span>
        )}

        {!disconnectedMode &&
          props.fields.data.home.children.map((child: any) => (
            <li className="navigation__link" key={child.id}>
              <RouterLink to={child.url}>{child.name}</RouterLink>
            </li>
          ))}
      </div>
    </div>
  );
};

export default withSitecoreContext()(Navigation);
