import React, { FunctionComponent } from "react";
import { JssGraphQlComponentProps } from "../../types/sitecore/layoutServiceTypes";
import { getTopMenuPropsMock } from "./mock-data";
import "./_styles.css";
import { withSitecoreContext } from "@sitecore-jss/sitecore-jss-react";
import Icon from "../Icon";
import { getMockOrConnectedProps } from "../../utilities/graphql-util";
import { SocialIconJss } from "../../types/domain/SocialIcon/socialIcon";
import { BaseSitecoreItem } from "../../types/sitecore/layoutServiceItemTypes";
import { JssField } from "../../types/sitecore/layoutServiceFieldTypes";

export interface TopMenuProps {
  home: Omit<BaseSitecoreItem, "children"> & {
    pageTitle: JssField<string>;
  };
  social: {
    id: string;
    children: SocialIconJss[];
  };
  datasource: {
    id: string;
    searchText: JssField<string>;
  };
}

const TopMenu: FunctionComponent<JssGraphQlComponentProps<TopMenuProps>> = (
  props: JssGraphQlComponentProps<TopMenuProps>
): React.ReactElement => {
  console.log("TopMenu", props);

  const { social, home, datasource } = getMockOrConnectedProps(
    getTopMenuPropsMock(),
    props,
    "TopMenu"
  ).fields.data;

  return (
    <div className="top-menu">
      <div className="top-menu__social-media">
        {social.children.map((socialIcon: SocialIconJss) => (
          <a
            className="top-menu__social-media-link"
            key={socialIcon.id}
            href={socialIcon.socialLink.jss.value.href}
          >
            <Icon id={socialIcon.socialIcon.jss.value} />
          </a>
        ))}
      </div>

      <a className="top-menu__page-title" href={home.url}>
        <h1>{home.pageTitle.jss.value}</h1>
      </a>

      <div>
        <div className="top-menu__search">
          <input
            className="top-menu__search-input"
            placeholder={datasource.searchText.jss.value}
            type="text"
          />
          <Icon className="top-menu__search-icon" id="search" />
        </div>
      </div>
    </div>
  );
};

export default withSitecoreContext()(TopMenu);
