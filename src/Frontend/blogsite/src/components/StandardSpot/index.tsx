import React, { FunctionComponent } from "react";
import { Text, Image } from "@sitecore-jss/sitecore-jss-react";
import {
  Field,
  Image as ImageField
} from "../../types/sitecore/layoutServiceFieldTypes";
import { JssComponentProps } from "../../types/sitecore/layoutServiceTypes";
import "./_styles.css";

interface StandardSpotProps {
  heading: Field<string>;
  manchet: Field<string>;
  text: Field<string>;
  image: Field<ImageField>;
}

const StandardSpot: FunctionComponent<JssComponentProps<StandardSpotProps>> = (
  props: JssComponentProps<StandardSpotProps>
): React.ReactElement => (
  <div className="standard-spot">
    <Image className="standard-spot__image" field={props.fields.image} />
    <Text
      className="standard-spot__manchet"
      tag="span"
      field={props.fields.manchet}
    />
    <Text
      className="standard-spot__heading"
      tag="h4"
      field={props.fields.heading}
    />
    <Text className="standard-spot__text" tag="p" field={props.fields.text} />
  </div>
);

export default StandardSpot;
