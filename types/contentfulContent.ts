import * as contentful from "contentful";

export type ContentfulPost = contentful.Entry<contentful.EntrySkeletonType, undefined, string>;

export interface ContentfulData {
  date: string;
  image: ContentImage;
  title: string;
}

export interface ContentImage {
  fields: {
    file: {
      url: string;
      description: string;
    };
  };
}
