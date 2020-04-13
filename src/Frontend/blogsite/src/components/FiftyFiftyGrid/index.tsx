import React from "react";
import { Placeholder } from "@sitecore-jss/sitecore-jss-react";

import "./_styles.css";
import { JssComponent } from "../../types/sitecore/layoutServiceTypes";

const FiftyFiftyGrid = (props: JssComponent<{}>) => (
  <div className="fifty-fifty-grid">
    {console.log("FiftyFiftyGrid", props)}
    <div className="fifty-fifty-grid__left">
      <Placeholder name="fifty-fifty-grid-left" rendering={props.rendering} />
    </div>
    <div className="fifty-fifty-grid__right">
      <Placeholder name="fifty-fifty-grid-right" rendering={props.rendering} />
    </div>
  </div>
);

export default FiftyFiftyGrid;
