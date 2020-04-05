type LayoutServiceFieldType<T> =
  | string
  | number
  | boolean
  | Link
  | Image
  | ContentListField<T>;

export type Field<T extends LayoutServiceFieldType<T>> = {
  value: T;
};

export type JssField<T extends LayoutServiceFieldType<T>> = {
  jss: {
    value: T;
  };
};

export type Link = {
  href: string;
  text: string;
  linkType: string;
  id?: string;
};

export type Image = {
  src: string;
  alt: string;
};

export type ContentListField<T> = {
  id: string;
  fields: T;
};
