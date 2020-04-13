import React, { FunctionComponent } from "react";
import { Text, Link } from "@sitecore-jss/sitecore-jss-react";
import { JssComponentProps } from "../../types/sitecore/layoutServiceTypes";
import {
  ContentListField,
  Field
} from "../../types/sitecore/layoutServiceFieldTypes";
import "./_styles.css";
import { SocialIcon } from "../../types/domain/SocialIcon/socialIcon";

interface SocialBarProps {
  shareText: Field<string>;
  socialLinks: ContentListField<SocialIcon>[];
}

const SocialBar: FunctionComponent<JssComponentProps<SocialBarProps, {}>> = (
  props: JssComponentProps<SocialBarProps, {}>
): React.ReactElement => {
  console.log("SocialBar", props);
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
          className={`social-bar__link social-bar__link--theme-${
            socialLink.fields.applyThemeColor.value
              ? socialLink.fields.socialName.value
              : ""
          }`}
          field={socialLink.fields.socialLink.value}
        />
      ))}
    </div>
  );
};

export default SocialBar;
