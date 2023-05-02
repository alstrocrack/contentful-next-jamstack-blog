import React from "react";
import { ContentImage } from "../types/contentfulContent";
import styles from "../styles/Post.module.scss";

const Post: React.FC<{ date: string; image: ContentImage; title: string }> = ({ date, image, title }) => {
  const { url, description } = image.fields.file;
  return (
    <div className={styles.post}>
      <div className={styles.image}>
        <img alt={description} src={`https:${url}`} />
      </div>
      <div className={styles.description}>{description}</div>
      <div className={styles.text}>
        <h2>{title}</h2>
        <h3 className={styles.date}>{date.substring(0, 10)}</h3>
      </div>
    </div>
  );
};

export default Post;
