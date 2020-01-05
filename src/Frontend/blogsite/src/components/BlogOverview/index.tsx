import React from "react";
import { Text, Link, RichText } from "@sitecore-jss/sitecore-jss-react";
import "./_styles.css";
import {
  SimpleField,
  LinkField
} from "../../types/sitecore/layoutServiceFieldTypes";
import { JssComponentProps } from "../../types/sitecore/layoutServiceTypes";

interface BlogOverviewFields {
  headline: SimpleField<string>;
  manchet: SimpleField<string>;
  recommendedBlog: LinkField;
  text: SimpleField<string>;
}

const BlogOverview: React.FunctionComponent<JssComponentProps<
  BlogOverviewFields
>> = (props: JssComponentProps<BlogOverviewFields>): React.ReactElement => (
  <div className="blog-overview">
    {console.log("BlogOverview", props)}
    <h2 className="blog-overview__headline">
      <Text field={props.fields.headline} />
    </h2>
    <div className="blog-overview__recommendation">
      <span className="blog-overview__manchet">
        <Text field={props.fields.manchet} />
      </span>
      <Link field={props.fields.recommendedBlog} />
    </div>
    <p className="blog-overview__generic-content">Generic content below</p>
    <RichText field={props.fields.text} />
  </div>
);

export default BlogOverview;
