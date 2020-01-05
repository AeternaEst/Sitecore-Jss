import React from "react";
import { Text, Image } from "@sitecore-jss/sitecore-jss-react";
import { Link as RouterLink } from "react-router-dom";

import "./_styles.css";
import {
  SimpleField,
  LinkField,
  ImageField
} from "../../types/sitecore/layoutServiceFieldTypes";
import { JssComponentProps } from "../../types/sitecore/layoutServiceTypes";

export interface ContentBoxFields {
  boxTitle: SimpleField<string>;
  boxManchet: SimpleField<string>;
  boxLink: LinkField;
  boxImage: ImageField;
}

const ContentBox: React.FunctionComponent<JssComponentProps<
  ContentBoxFields
>> = (props: JssComponentProps<ContentBoxFields>): React.ReactElement => (
  <div className="content-box">
    {console.log("ContentBox", props)}
    <Text
      className="content-box__title"
      field={props.fields.boxTitle}
      tag="h3"
    />
    <Text
      className="content-box__manchet"
      field={props.fields.boxManchet}
      tag="p"
    />
    <RouterLink to={props.fields.boxLink.value.href}>
      <Image className="content-box__image" field={props.fields.boxImage} />
    </RouterLink>
    <RouterLink to={props.fields.boxLink.value.href}>
      {props.fields.boxLink.value.text}
    </RouterLink>
  </div>
);

export default ContentBox;
