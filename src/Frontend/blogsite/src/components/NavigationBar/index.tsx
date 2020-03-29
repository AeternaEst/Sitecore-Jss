import React, { FunctionComponent } from "react";
import { JssGraphQlComponentProps } from "../../types/sitecore/layoutServiceTypes";
import { Link as RouterLink } from "react-router-dom";
import { getNavigationBarPropsMock } from "./mock-data";
import "./_styles.css";
import { withSitecoreContext } from "@sitecore-jss/sitecore-jss-react";
import Icon from "../Icon";
import { NavigationLink, SocialIcon } from "./types";
import { getMockOrConnectedProps } from "../../utilities/graphql-util";

export interface NavigationBarProps {
  home: NavigationLink & {
    children: Array<NavigationLink>;
  };
  social: {
    id: string;
    children: Array<SocialIcon>;
  };
}

export interface NavigationBarParams {
  showSocialIcons?: string;
}

const NavigationBar: FunctionComponent<JssGraphQlComponentProps<
  NavigationBarProps,
  NavigationBarParams
>> = (
  props: JssGraphQlComponentProps<NavigationBarProps, NavigationBarParams>
): React.ReactElement => {
  console.log("NavigationBar props", props);

  const { home, social } = getMockOrConnectedProps(
    getNavigationBarPropsMock(),
    props
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
          {social.children.map((socialIcon: SocialIcon) => (
            <a
              className="navigation-bar__social-media-link"
              key={socialIcon.id}
              href={socialIcon.socialLink.url}
            >
              <Icon id={socialIcon.socialIcon.value} />
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

export default withSitecoreContext()(NavigationBar);
