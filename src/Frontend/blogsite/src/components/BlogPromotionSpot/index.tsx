import React, { FunctionComponent } from "react";
import { Text } from "@sitecore-jss/sitecore-jss-react";
import { JssComponentProps } from "../../types/sitecore/layoutServiceTypes";
import "./_styles.css";
import { removeTimeFromDate } from "../../utilities/layout-service";
import { BlogPostProps } from "../BlogPost";

export interface BlogPromotionSpotProps {
  blogLink: {
    fields: BlogPostProps;
    id?: string;
    url?: string;
  };
}

interface BlogPromotionParams {
  smallTexts: string;
}

const BlogPromotionSpot: FunctionComponent<JssComponentProps<
  BlogPromotionSpotProps,
  BlogPromotionParams
>> = (
  props: JssComponentProps<BlogPromotionSpotProps, BlogPromotionParams>
): React.ReactElement => {
  console.log("BlogPromotionSpot", props);
  const fields = props.fields.blogLink.fields;

  return (
    <a
      className="blog-promotion-spot"
      style={{
        backgroundImage: `url(${fields.image.value.src})`
      }}
      href={props.fields.blogLink.url || "#"}
    >
      <div className="blog-promotion-spot__content">
        <Text
          tag="span"
          field={fields.category}
          className={`blog-promotion-spot__category ${
            props.params?.smallTexts === "1"
              ? "blog-promotion-spot__category--small"
              : ""
          }`}
        />
        <Text
          tag="h2"
          field={fields.title}
          className={`blog-promotion-spot__title ${
            props.params?.smallTexts === "1"
              ? "blog-promotion-spot__title--small"
              : ""
          }`}
        />
        <Text
          tag="span"
          field={removeTimeFromDate(fields.date)}
          className={`blog-promotion-spot__date ${
            props.params?.smallTexts === "1"
              ? "blog-promotion-spot__date--small"
              : ""
          }`}
        />
      </div>
    </a>
  );
};

export default BlogPromotionSpot;
