import { SimpleJssField } from "../../types/sitecore/layoutServiceFieldTypes";

export type NavigationLink = {
  id: string;
  name: string;
  url: string;
};

export type SocialIcon = {
  id: string;
  socialName: SimpleJssField<string>;
  socialIcon: SimpleJssField<string>;
  socialLink: SocialLink;
};

export type SocialLink = {
  value: string;
  text: string;
  url: string;
  jss: {
    value: string;
    text: string;
    url: string;
    linktype: string;
  };
};
