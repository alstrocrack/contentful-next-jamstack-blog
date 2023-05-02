import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import fetchEntries from "../utils/contentfulPosts";
import Post from "../components/Post";
import React from "react";
import { contentfulData } from "../models/contentfulContent";

interface contentfulProps {
  posts: contentfulData[];
}

const Home: React.FC<contentfulProps> = ({ posts }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Contentful Next Jamstack Blog</title>

        <meta property="og:type" content="website" />
        <meta property="og:title" content="YutoUrushima" />
        <meta property="og:description" content="Next.js + contentful" />
        {/* <meta property="og:url" content="https://pedantic-hugle-406857.netlify.app" /> */}
        <meta property="og:site_name" content="YutoUrushima" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="YutoUrushima" />
        <meta name="twitter:title" content="YutoUrushima" />
        <meta name="twitter:description" content="Next.js + contentful" />
        {/* <meta name="twitter:image" content="https://pedantic-hugle-406857.netlify.app/b-ogp-image.jpg" /> */}
        {/* <meta name="twitter:url" content="https://pedantic-hugle-406857.netlify.app" /> */}

        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className="posts">
          {posts.map((p) => {
            return <Post key={p.date} date={p.date} image={p.image} title={p.title} />;
          })}
        </div>
      </main>
    </div>
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
