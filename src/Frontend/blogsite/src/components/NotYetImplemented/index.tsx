import React, { FunctionComponent } from "react";
import { JssComponent } from "../../types/sitecore/layoutServiceTypes";
import "./_styles.css";

const NotYetImplemented: FunctionComponent<JssComponent> = (): React.ReactElement => (
  <div className="not-yet-implemented">
    <h2>Not Yet Implemented</h2>
  </div>
);

export default NotYetImplemented;
