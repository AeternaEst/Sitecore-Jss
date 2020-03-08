import React, { FunctionComponent } from "react";
import {
  Text,
  Image,
  RichText,
  DateField,
  Placeholder
} from "@sitecore-jss/sitecore-jss-react";
import {
  SimpleField,
  ImageField
} from "../../types/sitecore/layoutServiceFieldTypes";
import { JssComponentProps } from "../../types/sitecore/layoutServiceTypes";
import "./_styles.css";
import { removeTimeFromDate } from "../../utilities/layout-service";

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
    {console.log("blogpost props", props)}
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
        <DateField field={removeTimeFromDate(props.fields.date)} tag="span" />
        <span className="blog-post__bullet">&#8226;</span>
        <Text field={props.fields.category} tag="span" />
      </div>
      <RichText field={props.fields.text} />

      <div className="blog-post__placeholder">
        <Placeholder name="ph_blog_post" rendering={props.rendering} />
      </div>
    </div>
  </div>
);

export default BlogPost;
