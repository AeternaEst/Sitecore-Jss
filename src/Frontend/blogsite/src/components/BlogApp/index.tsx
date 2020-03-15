/* eslint-disable */
import React from "react";
import { Placeholder } from "@sitecore-jss/sitecore-jss-react";
import { JssComponentProps } from "../../types/sitecore/layoutServiceTypes";

interface BlogAppState {
  isReady: boolean;
}

class BlogApp extends React.Component<
  JssComponentProps<undefined>,
  BlogAppState
> {
  constructor(props: any) {
    super(props);
    this.state = {
      isReady: false
    };
  }

  public componentDidMount() {
    this.setState({
      isReady: true
    });
  }

  public render() {
    const { rendering } = this.props;
    const { isReady } = this.state;
    return (
      <div
        className="page-container"
        style={{
          display: isReady ? "block" : "none",
          visibility: isReady ? "visible" : "hidden"
        }}
      >
        <Placeholder name="ph_blog_app" rendering={rendering} />
      </div>
    );
  }
}

export default BlogApp;
