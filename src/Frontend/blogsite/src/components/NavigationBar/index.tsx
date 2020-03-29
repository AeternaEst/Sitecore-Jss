import React, { FunctionComponent } from "react";
import { JssGraphQlComponentProps } from "../../types/sitecore/layoutServiceTypes";
import { Link as RouterLink } from "react-router-dom";
import { homeMock, socialIconsMock } from "./mock-data";
import "./_styles.css";
import { withSitecoreContext } from "@sitecore-jss/sitecore-jss-react";
import Icon from "../Icon";
import { NavigationLink, SocialIcon } from "./types";
import { getMockOrConnectedProp } from "../../utilities/graphql-util";

export interface NavigationBarProps {
  home: NavigationLink & {
    children: Array<NavigationLink>;
  };
  social: {
    id: string;
    children: Array<SocialIcon>;
  };
}

const NavigationBar: FunctionComponent<JssGraphQlComponentProps<
  NavigationBarProps
>> = (
  props: JssGraphQlComponentProps<NavigationBarProps>
): React.ReactElement => {
  console.log("NavigationBar props", props);

  const home = getMockOrConnectedProp<NavigationBarProps["home"]>(
    homeMock,
    props,
    "home"
  );
  const social = getMockOrConnectedProp<NavigationBarProps["social"]>(
    socialIconsMock,
    props,
    "social"
  );

  return (
    <div className="navigation-bar">
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
    </div>
  );
};

export default withSitecoreContext()(NavigationBar);
