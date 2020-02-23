import React, { FunctionComponent } from "react";
import { Text, Image, RichText } from "@sitecore-jss/sitecore-jss-react";
import {
  SimpleField,
  ImageField
} from "../../types/sitecore/layoutServiceFieldTypes";
import { JssComponentProps } from "../../types/sitecore/layoutServiceTypes";
import "./_styles.css";

interface BlogPostProps {
  title: SimpleField<string>;
  date: SimpleField<string>;
  category: SimpleField<string>;
  text: SimpleField<string>;
  image: ImageField;
  imageHeading: SimpleField<string>;
  imageManchet: SimpleField<string>;
}

const BlogPost: FunctionComponent<JssComponentProps<BlogPostProps>> = (
  props: JssComponentProps<BlogPostProps>
): React.ReactElement => (
  <div className="blog-post">
    <div className="blog-post__header">
      <Image field={props.fields.image} className="blog-post__image" />
      <div className="blog-post__image-texts">
        <Text
          field={props.fields.imageHeading}
          className="blog-post__image-heading"
          tag="h1"
        />
        <Text
          field={props.fields.imageManchet}
          className="blog-post__image-manchet"
          tag="h3"
        />
      </div>
    </div>
    <div className="blog-post__body">
      <Text className="blog-post__title" field={props.fields.title} tag="h1" />
      <div className="blog-post__manchet">
        <Text field={props.fields.date} tag="span" />
        <span className="blog-post__bullet">&#8226;</span>
        <Text field={props.fields.category} tag="span" />
      </div>
      <RichText field={props.fields.text} />
    </div>
  </div>
);

export default BlogPost;
