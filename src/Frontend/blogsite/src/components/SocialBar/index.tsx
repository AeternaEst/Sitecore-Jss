import React, { FunctionComponent } from "react";
import { JssComponentProps } from "../../types/sitecore/layoutServiceTypes";

// interface SocialBarProps {
//   title: SimpleField<string>;
// }

const SocialBar: FunctionComponent<JssComponentProps<any>> = (
  props: JssComponentProps<any>
): React.ReactElement => {
  console.log(props);
  return <div className="social-bar">Hello</div>;
};

export default SocialBar;
