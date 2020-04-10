import React, { FunctionComponent } from "react";
import { JssGraphQlComponentPropsWithParams } from "../../types/sitecore/layoutServiceTypes";
import { Link as RouterLink } from "react-router-dom";
import { getNavigationBarPropsMock } from "./mock-data";
import "./_styles.css";
import { withSitecoreContext } from "@sitecore-jss/sitecore-jss-react";
import Icon from "../Icon";
import { getMockOrConnectedProps } from "../../utilities/graphql-util";
import { BaseSitecoreItem } from "../../types/sitecore/layoutServiceItemTypes";
import { SocialIconJss } from "../../types/domain/SocialIcon/socialIcon";

export interface NavigationBarProps {
  home: BaseSitecoreItem;
  social: {
    id: string;
    children: SocialIconJss[];
  };
}

export interface NavigationBarParams {
  showSocialIcons?: string;
}

const NavigationBar: FunctionComponent<JssGraphQlComponentPropsWithParams<
  NavigationBarProps,
  NavigationBarParams
>> = (
  props: JssGraphQlComponentPropsWithParams<
    NavigationBarProps,
    NavigationBarParams
  >
): React.ReactElement => {
  console.log("NavigationBar props", props);

  const { home, social } = getMockOrConnectedProps(
    getNavigationBarPropsMock(),
    props,
    "NavigationBar"
  ).fields.data;

  return (
    <div
      className={`navigation-bar ${
        props.params.showSocialIcons ? "navigation-bar--with-social-icons" : ""
      }`}
    >
      <div className="navigation-bar__navigation-items">
        <div className="navigation-bar__navigation-item" key={home.id}>
          <RouterLink to={home.url}>{home.name}</RouterLink>
        </div>
        {home.children.map((child: any) => (
          <div className="navigation-bar__navigation-item" key={child.id}>
            <RouterLink to={child.url}>{child.name}</RouterLink>
          </div>
        ))}
      </div>

      {props.params.showSocialIcons && (
        <div className="navigation-bar__social-media">
          {social.children.map((socialIcon: SocialIconJss) => (
            <a
              className="navigation-bar__social-media-link"
              key={socialIcon.id}
              href={socialIcon.socialLink.jss.value.href}
            >
              <Icon id={socialIcon.socialIcon.jss.value} />
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

export default withSitecoreContext()(NavigationBar);
