import React, { FunctionComponent } from 'react';
import { Text } from '@sitecore-jss/sitecore-jss-react';
import { SimpleField } from '../../types/sitecore/layoutServiceFieldTypes';
import { JssComponentProps } from '../../types/sitecore/layoutServiceTypes';

interface BlogPostProps {
  title: SimpleField<string>;
  date: SimpleField<string>;
  category: SimpleField<string>;
  text: SimpleField<string>;
}

const BlogPost: FunctionComponent<JssComponentProps<BlogPostProps>> = (props: JssComponentProps<BlogPostProps>): React.ReactElement => (
  <div className="blog-post">
    <Text field={props.fields.title} tag="h2" />
    <div className="blog-post__manchet">
      <Text field={props.fields.date} tag="span" />
      *
      <Text field={props.fields.category} tag="span" />
    </div>
    <Text field={props.fields.text} tag="p" />
  </div>
);

export default BlogPost;
