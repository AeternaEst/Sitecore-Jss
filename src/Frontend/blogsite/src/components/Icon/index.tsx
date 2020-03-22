import React, { FunctionComponent } from "react";
import { getSvg } from "../../utilities/svg-util";
import "./_styles.css";

interface IconProps {
  id: string;
}

const Icon: FunctionComponent<IconProps> = (
  props: IconProps
): React.ReactElement => {
  const svgElement = getSvg(props.id);
  return (
    <div
      className={`icon icon-${props.id}`}
      dangerouslySetInnerHTML={{ __html: svgElement }}
    ></div>
  );
};

export default Icon;
