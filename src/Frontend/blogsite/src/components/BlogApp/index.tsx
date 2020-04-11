/* eslint-disable */
import React from "react";
import { Placeholder } from "@sitecore-jss/sitecore-jss-react";
import { JssComponent } from "../../types/sitecore/layoutServiceTypes";

interface BlogAppState {
  isReady: boolean;
}

class BlogApp extends React.Component<JssComponent, BlogAppState> {
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
    console.log("BlogApp", this.props);
    const { rendering } = this.props;
    const { isReady } = this.state;
    return (
      <>
        <Placeholder name="ph_blog_app_top" rendering={rendering} />
        <div
          className="page-container"
          style={{
            display: isReady ? "block" : "none",
            visibility: isReady ? "visible" : "hidden"
          }}
        >
          <Placeholder name="ph_blog_app_center" rendering={rendering} />
        </div>
        <Placeholder name="ph_blog_app_bottom" rendering={rendering} />
      </>
    );
  }
}

export default BlogApp;
