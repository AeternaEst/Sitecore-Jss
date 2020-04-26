import React, { FunctionComponent } from "react";
import "./_styles.css";
import { Link as RouterLink } from "react-router-dom";

interface ButtonLinkProps {
  link: string;
  text: string;
  className?: string;
  fullWidth?: boolean;
}

const ButtonLink: FunctionComponent<ButtonLinkProps> = (
  props: ButtonLinkProps
): React.ReactElement => {
  return (
    <div
      className={`button-link ${
        props.fullWidth ? "button-link--full-width" : ""
      } ${props.className ? props.className : ""}`}
    >
      <RouterLink
        to={props.link}
        className={`button-link__link ${
          props.fullWidth ? "button-link__link--full-width" : ""
        }`}
      >
        {props.text}
      </RouterLink>
    </div>
  );
};

export default ButtonLink;
