import React, { FunctionComponent } from "react";
import { Text } from "@sitecore-jss/sitecore-jss-react";
import { Field, Image } from "../../types/sitecore/layoutServiceFieldTypes";
import { JssComponentPropsWithParams } from "../../types/sitecore/layoutServiceTypes";
import "./_styles.css";
import { removeTimeFromDate } from "../../utilities/layout-service";

interface BlogPromotionSpotProps {
  title: Field<string>;
  date: Field<string>;
  category: Field<string>;
  image: Field<Image>;
}

interface BlogPromotionParams {
  smallTexts: string;
}

const BlogPromotionSpot: FunctionComponent<JssComponentPropsWithParams<
  BlogPromotionSpotProps,
  BlogPromotionParams
>> = (
  props: JssComponentPropsWithParams<
    BlogPromotionSpotProps,
    BlogPromotionParams
  >
): React.ReactElement => {
  console.log("BlogPromotionSpot", props);
  return (
    <div
      className="blog-promotion-spot"
      style={{
        backgroundImage: `url(${props.fields.image.value.src})`
      }}
    >
      <div className="blog-promotion-spot__content">
        <Text
          tag="span"
          field={props.fields.category}
          className={`blog-promotion-spot__category ${
            props.params?.smallTexts === "1"
              ? "blog-promotion-spot__category--small"
              : ""
          }`}
        />
        <Text
          tag="h2"
          field={props.fields.title}
          className={`blog-promotion-spot__title ${
            props.params?.smallTexts === "1"
              ? "blog-promotion-spot__title--small"
              : ""
          }`}
        />
        <Text
          tag="span"
          field={removeTimeFromDate(props.fields.date)}
          className={`blog-promotion-spot__date ${
            props.params?.smallTexts === "1"
              ? "blog-promotion-spot__date--small"
              : ""
          }`}
        />
      </div>
    </div>
  );
};

export default BlogPromotionSpot;
