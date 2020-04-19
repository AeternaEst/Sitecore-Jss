import React, { FunctionComponent } from "react";
import { getSvg } from "../../utilities/svg-util";
import "./_styles.css";

export type IconId = "facebook" | "google" | "twitter" | "search" | "quote";

interface IconProps {
  id: IconId;
  className?: string;
}

const Icon: FunctionComponent<IconProps> = (
  props: IconProps
): React.ReactElement => {
  const svgElement = getSvg(props.id);
  return (
    <div
      className={`icon icon-${props.id} ${props.className || ""}`}
      dangerouslySetInnerHTML={{ __html: svgElement }}
    ></div>
  );
};

export default Icon;
