import React, { FunctionComponent } from "react";
import { Text, Image } from "@sitecore-jss/sitecore-jss-react";
import {
  Field,
  Image as ImageField,
  Link as LinkField,
} from "../../types/sitecore/layoutServiceFieldTypes";
import { JssComponentProps } from "../../types/sitecore/layoutServiceTypes";
import "./_styles.css";
import ButtonLink from "../ButtonLink";

interface StandardSpotProps {
  heading: Field<string>;
  link: Field<LinkField>;
  text: Field<string>;
  image: Field<ImageField>;
}

const StandardSpot: FunctionComponent<JssComponentProps<
  StandardSpotProps,
  {}
>> = (props: JssComponentProps<StandardSpotProps, {}>): React.ReactElement => {
  console.log("StandardSpot", props);
  return (
    <div className="standard-spot">
      <Image className="standard-spot__image" field={props.fields.image} />
      <Text
        className="standard-spot__heading"
        tag="h4"
        field={props.fields.heading}
      />
      <Text className="standard-spot__text" tag="p" field={props.fields.text} />
      <ButtonLink
        className="standard-spot__link"
        fullWidth={true}
        link={props.fields.link.value.href}
        text={props.fields.link.value.text}
      />
      {/* <div className="standard-spot__text-content">
        
      </div> */}
    </div>
  );
};

export default StandardSpot;
