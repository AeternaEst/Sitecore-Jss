// @ts-ignore
import { Component } from "react";
// import React, { FunctionComponent } from "react";
// import { JssGraphQlComponentProps } from "../../types/sitecore/layoutServiceTypes";
// import { getTopMenuPropsMock } from "./mock-data";
// import "./_styles.css";
// import { withSitecoreContext } from "@sitecore-jss/sitecore-jss-react";
// import Icon from "../Icon";
// import { SocialIcon } from "./types";
// import { getMockOrConnectedProps } from "../../utilities/graphql-util";

// export interface TopMenuProps {
//   home: {
//     url: string;
//   };
//   social: {
//     id: string;
//     children: Array<SocialIcon>;
//   };
// }

// const TopMenu: FunctionComponent<JssGraphQlComponentProps<TopMenuProps, {}>> = (
//   props: JssGraphQlComponentProps<TopMenuProps, {}>
// ): React.ReactElement => {
//   console.log("TopMenu props", props);

//   const { social } = getMockOrConnectedProps(
//     getTopMenuPropsMock(),
//     props
//   ).fields.data;

//   return (
//     <div className="top-menu">
//       <div className="top-menu__social-media">
//         {social.children.map((socialIcon: SocialIcon) => (
//           <a
//             className="top-menu__social-media-link"
//             key={socialIcon.id}
//             href={socialIcon.socialLink.url}
//           >
//             <Icon id={socialIcon.socialIcon.value} />
//           </a>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default withSitecoreContext()(TopMenu);
