import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import styles from "../styles/Home.module.scss";
import fetchEntries from "../utils/contentfulPosts";
import Post from "../components/Post";
import { ContentfulData } from "../types/contentfulContent";

interface ContentfulProps {
  posts: ContentfulData[];
}

const Home: React.FC<ContentfulProps> = ({ posts }) => {
  return (
    <>
      <Header />
      <div className={styles.container}>
        <main className={styles.main}>
          <div className={styles.posts}>
            {posts.map((p) => {
              return <Post key={p.date} date={p.date} image={p.image} title={p.title} />;
            })}
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
};

export default Home;

export async function getStaticProps() {
  const res = await fetchEntries();
  const posts = res.map((post) => {
    return post.fields;
  });
  return {
    props: {
      posts,
    },
  };
}
