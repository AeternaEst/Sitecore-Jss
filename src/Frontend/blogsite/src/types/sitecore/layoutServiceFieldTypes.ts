export type SimpleField<T extends string | number | boolean> = {
  value: T;
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
