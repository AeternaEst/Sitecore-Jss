import { SocialIconJss } from "./socialIcon";

export const socialIconGoogle: SocialIconJss = {
  id: "google",
  socialName: {
    jss: {
      value: "Google",
    },
  },
  socialIcon: {
    jss: {
      value: "google",
    },
  },
  socialLink: {
    jss: {
      value: {
        href: "www.google.com",
        linkType: "external",
        text: "Google",
        id: "google",
      },
    },
  },
  applyThemeColor: {
    jss: {
      value: true,
    },
  },
};

export const socialIconFacebook: SocialIconJss = {
  id: "facebook",
  socialName: {
    jss: {
      value: "Facebook",
    },
  },
  socialIcon: {
    jss: {
      value: "facebook",
    },
  },
  socialLink: {
    jss: {
      value: {
        href: "www.facebook.com",
        linkType: "external",
        text: "Facebook",
        id: "facebook",
      },
    },
  },
  applyThemeColor: {
    jss: {
      value: true,
    },
  },
};

export const socialIconTwitter: SocialIconJss = {
  id: "twitter",
  socialName: {
    jss: {
      value: "Twitter",
    },
  },
  socialIcon: {
    jss: {
      value: "twitter",
    },
  },
  socialLink: {
    jss: {
      value: {
        href: "www.twitter.com",
        linkType: "external",
        text: "Twitter",
        id: "twitter",
      },
    },
  },
  applyThemeColor: {
    jss: {
      value: true,
    },
  },
};

export const socialIconsList: SocialIconJss[] = [
  socialIconGoogle,
  socialIconFacebook,
  socialIconTwitter,
];

export const socialRootMock = {
  id: "socialIconRoot",
  children: socialIconsList,
};
