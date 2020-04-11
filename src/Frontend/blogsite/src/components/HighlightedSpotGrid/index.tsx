import React, { FunctionComponent } from "react";
import { JssComponentProps } from "../../types/sitecore/layoutServiceTypes";
import "./_styles.css";
import { Placeholder } from "@sitecore-jss/sitecore-jss-react";

const HighlightedSpotGrid: FunctionComponent<JssComponentProps<any>> = (
  props: JssComponentProps<any>
): React.ReactElement => (
  <div className="highlighted-spot-grid">
    <div className="highlighted-spot-grid__main">
      <Placeholder name="ph_highlited_spot_main" rendering={props.rendering} />
    </div>

    <div className="highlighted-spot-grid__right">
      <Placeholder name="ph_highlited_spot_right" rendering={props.rendering} />
    </div>
  </div>
);

export default HighlightedSpotGrid;
