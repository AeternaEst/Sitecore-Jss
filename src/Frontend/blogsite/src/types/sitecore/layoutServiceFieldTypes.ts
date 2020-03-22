export type SimpleField<T extends string | number | boolean> = {
  value: T;
};

export type SimpleJssField<T extends string | number | boolean> = SimpleField<
  T
> & {
  jss: {
    value: T;
  };
};

export type LinkField = {
  value: {
    href: string;
    text: string;
    linkType: string;
    id: string;
  };
};

export type ImageField = {
  value: {
    src: string;
    alt: string;
  };
};

export type ContentListField<T> = {
  id: string;
  fields: T;
};
