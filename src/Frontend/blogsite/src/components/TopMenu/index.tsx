import React, { FunctionComponent } from "react";
import { JssGraphQlComponentProps } from "../../types/sitecore/layoutServiceTypes";
import { getTopMenuPropsMock } from "./mock-data";
import "./_styles.css";
import { withSitecoreContext } from "@sitecore-jss/sitecore-jss-react";
import Icon from "../Icon";
import { getMockOrConnectedProps } from "../../utilities/graphql-util";
import { SocialIconJss } from "../../types/domain/SocialIcon/socialIcon";

export interface TopMenuProps {
  home: {
    url: string;
  };
  social: {
    id: string;
    children: SocialIconJss[];
  };
}

const TopMenu: FunctionComponent<JssGraphQlComponentProps<TopMenuProps>> = (
  props: JssGraphQlComponentProps<TopMenuProps>
): React.ReactElement => {
  console.log("TopMenu props", props);

  const { social } = getMockOrConnectedProps(
    getTopMenuPropsMock(),
    props
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
    </div>
  );
};

export default withSitecoreContext()(TopMenu);
