import React, { FunctionComponent } from "react";
import { JssComponentProps } from "../../types/sitecore/layoutServiceTypes";
import "./_styles.css";
import { Placeholder } from "@sitecore-jss/sitecore-jss-react";

const BackgroundWrapper: FunctionComponent<JssComponentProps<any>> = (
  props: JssComponentProps<any>
): React.ReactElement => (
  <div className="background-wrapper">
    <Placeholder name="ph_background_wrapper" rendering={props.rendering} />
  </div>
);

export default BackgroundWrapper;
