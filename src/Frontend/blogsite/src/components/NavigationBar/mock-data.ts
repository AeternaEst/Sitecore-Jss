import { NavigationBarProps, NavigationBarParams } from "./index";
import { JssGraphQlComponentPropsWithData } from "../../types/sitecore/layoutServiceTypes";

export const getNavigationBarPropsMock = (): JssGraphQlComponentPropsWithData<
  NavigationBarProps,
  NavigationBarParams
> => {
  return {
    fields: {
      data: {
        home: homeMock,
        social: socialIconsMock
      }
    },
    params: {
      showSocialIcons: true && shouldShowSocialIcons() ? "1" : undefined
    }
  };
};

const shouldShowSocialIcons = () => {
  if (!window) {
    return false;
  }

  const segments = window.location.pathname.split("/");
  const blogsIndex = segments.findIndex(
    segment => segment.toLocaleLowerCase() === "blogs"
  );
  return blogsIndex !== -1 && blogsIndex < segments.length - 1;
};

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
