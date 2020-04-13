import React, { FunctionComponent } from "react";
import { JssComponent } from "../../types/sitecore/layoutServiceTypes";
import "./_styles.css";
import { Placeholder } from "@sitecore-jss/sitecore-jss-react";

const StandardSpotGrid: FunctionComponent<JssComponent> = (
  props: JssComponent
): React.ReactElement => (
  <div className="standard-spot-grid">
    <Placeholder name="ph_standard_spot_grid" rendering={props.rendering} />
  </div>
);

export default StandardSpotGrid;
