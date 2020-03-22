import { NavigationBarProps } from "./index";

export const homeMock: NavigationBarProps["home"] = {
  id: "home",
  name: "Home",
  url: "/",
  children: [
    {
      id: "blogs",
      name: "Blogs",
      url: "/Blogs"
    }
  ]
};

export const socialIconsMock: NavigationBarProps["social"] = {
  id: "socialIconRoot",
  children: [
    {
      id: "google",
      socialName: {
        jss: {
          value: "Google"
        },
        value: "Google"
      },
      socialIcon: {
        jss: {
          value: "google"
        },
        value: "google"
      },
      socialLink: {
        value: "www.google.com",
        url: "www.google.com",
        text: "Google+",
        jss: {
          value: "google",
          url: "www.google.com",
          text: "Google+",
          linktype: ""
        }
      }
    },
    {
      id: "google",
      socialName: {
        jss: {
          value: "Google"
        },
        value: "Google"
      },
      socialIcon: {
        jss: {
          value: "facebook"
        },
        value: "facebook"
      },
      socialLink: {
        value: "www.google.com",
        url: "www.google.com",
        text: "Google+",
        jss: {
          value: "google",
          url: "www.google.com",
          text: "Google+",
          linktype: ""
        }
      }
    },
    {
      id: "google",
      socialName: {
        jss: {
          value: "Google"
        },
        value: "Google"
      },
      socialIcon: {
        jss: {
          value: "twitter"
        },
        value: "twitter"
      },
      socialLink: {
        value: "www.google.com",
        url: "www.google.com",
        text: "Google+",
        jss: {
          value: "google",
          url: "www.google.com",
          text: "Google+",
          linktype: ""
        }
      }
    }
  ]
};
