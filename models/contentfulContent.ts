import * as contentful from "contentful";

export type contentfulPost = contentful.Entry<contentful.EntrySkeletonType, undefined, string>;

export type contentfulData = {
  date: string;
  image: contentImage;
  title: string;
};

export type contentImage = {
  fields: {
    file: {
      url: string;
      description: string;
    };
  };
};
