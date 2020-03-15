import React from "react";
import { Placeholder, Link } from "@sitecore-jss/sitecore-jss-react";
import Helmet from "react-helmet";
import "./styling/_root-styling.css";

/*
  APP LAYOUT
  This is where the app's HTML structure and root placeholders should be defined.

  All routes share this root layout by default (this could be customized in RouteHandler),
  but components added to inner placeholders are route-specific.
*/

const Layout = ({ route }) => (
  <React.Fragment>
    {/* react-helmet enables setting <head> contents, like title and OG meta tags */}
    <Helmet>
      <title>Hardcoded title</title>
    </Helmet>

    {/* root placeholder for the app, which we add components to using route data */}
    <div className="page-container">
      <Placeholder name="ph_main" rendering={route} />
    </div>
  </React.Fragment>
);

export default Layout;
