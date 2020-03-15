import React, { FunctionComponent } from "react";
import { Text } from "@sitecore-jss/sitecore-jss-react";
import { JssComponentProps } from "../../types/sitecore/layoutServiceTypes";
import SocialLink from "../../types/domain/socialIcon";
import { Link } from "@sitecore-jss/sitecore-jss-react";
import {
  ContentListField,
  SimpleField
} from "../../types/sitecore/layoutServiceFieldTypes";
import "./_styles.css";

interface SocialBarProps {
  shareText: SimpleField<string>;
  socialLinks: ContentListField<SocialLink>[];
}

const SocialBar: FunctionComponent<JssComponentProps<SocialBarProps>> = (
  props: JssComponentProps<SocialBarProps>
): React.ReactElement => {
  console.log(props);
  return (
    <div className="social-bar">
      <Text
        className="social-bar__link"
        field={props.fields.shareText}
        tag="span"
      />
      {props.fields.socialLinks.map(socialLink => (
        <Link
          key={socialLink.id}
          field={socialLink.fields.socialLink}
          className={`social-bar__link social-bar__link--theme-${
            socialLink.fields.applyThemeColor.value
              ? socialLink.fields.socialName.value
              : ""
          }`}
        />
      ))}
    </div>
  );
};

export default SocialBar;
