import React from "react";
import { contentImage } from "../models/contentfulContent";

const Post: React.FC<{ date: string; image: contentImage; title: string }> = ({ date, image, title }) => {
  const { url, description } = image.fields.file;
  return (
    <div className="post">
      <img alt={description} src={`https:${url}`} />
      <div className="description">{description}</div>
      <div className="text">
        <h2>{title}</h2>
        <h3>{date.substring(0, 10)}</h3>
      </div>
    </div>
  );
};

export default Post;
