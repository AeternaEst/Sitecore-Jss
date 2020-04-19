import React, { FunctionComponent } from "react";
import { Text } from "@sitecore-jss/sitecore-jss-react";
import { Field } from "../../types/sitecore/layoutServiceFieldTypes";
import { JssComponentProps } from "../../types/sitecore/layoutServiceTypes";
import "./_styles.css";
import Icon from "../Icon";

interface QuoteSpotProps {
  quote: Field<string>;
  source: Field<string>;
}

const QuoteSpot: FunctionComponent<JssComponentProps<QuoteSpotProps, {}>> = (
  props: JssComponentProps<QuoteSpotProps, {}>
): React.ReactElement => (
  <div className="quote-spot">
    <div className="quote-spot__content">
      <Icon id="quote" className="quote-spot__icon" />
      <Text
        field={props.fields.quote}
        className="quote-spot__quoute"
        tag="h4"
      />
      <Text
        field={props.fields.source}
        tag="span"
        className="quote-spot__source"
      />
    </div>
  </div>
);

export default QuoteSpot;
