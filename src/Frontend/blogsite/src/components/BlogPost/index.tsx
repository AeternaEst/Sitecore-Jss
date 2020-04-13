import React, { FunctionComponent } from "react";
import {
  Text,
  Image,
  RichText,
  DateField,
  Placeholder
} from "@sitecore-jss/sitecore-jss-react";
import {
  Field,
  Image as ImageField
} from "../../types/sitecore/layoutServiceFieldTypes";
import { JssComponentPropsWithContext } from "../../types/sitecore/layoutServiceTypes";
import { withSitecoreContext } from "@sitecore-jss/sitecore-jss-react";
import "./_styles.css";
import { removeTimeFromDate } from "../../utilities/layout-service";

export interface BlogPostProps {
  title: Field<string>;
  date: Field<string>;
  category: Field<string>;
  text: Field<string>;
  image: Field<ImageField>;
  imageHeading: Field<string>;
  imageManchet: Field<string>;
}

const BlogPost: FunctionComponent<JssComponentPropsWithContext<
  BlogPostProps
>> = (
  props: JssComponentPropsWithContext<BlogPostProps>
): React.ReactElement => {
  const fields = props.sitecoreContext.route.fields;
  return (
    <div className="blog-post">
      {console.log("Blogpost", props)}
      <div className="blog-post__header">
        <Image field={fields.image} className="blog-post__image" />
        <div className="blog-post__image-texts">
          <Text
            field={fields.imageHeading}
            className="blog-post__image-heading"
            tag="h1"
          />
          <Text
            field={fields.imageManchet}
            className="blog-post__image-manchet"
            tag="h3"
          />
        </div>
      </div>
      <div className="blog-post__body">
        <Text className="blog-post__title" field={fields.title} tag="h1" />
        <div className="blog-post__manchet">
          <DateField field={removeTimeFromDate(fields.date)} tag="span" />
          <span className="blog-post__bullet">&#8226;</span>
          <Text field={fields.category} tag="span" />
        </div>
        <RichText field={fields.text} />

        <div className="blog-post__placeholder">
          <Placeholder name="ph_blog_post" rendering={props.rendering} />
        </div>
      </div>
    </div>
  );
};

export default withSitecoreContext()(BlogPost);
