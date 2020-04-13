import React, { FunctionComponent } from "react";
import { JssComponent } from "../../types/sitecore/layoutServiceTypes";
import "./_styles.css";
import { Placeholder } from "@sitecore-jss/sitecore-jss-react";

const BackgroundWrapper: FunctionComponent<JssComponent> = (
  props: JssComponent
): React.ReactElement => (
  <div className="background-wrapper">
    <Placeholder name="ph_background_wrapper" rendering={props.rendering} />
  </div>
);

export default BackgroundWrapper;
