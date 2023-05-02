import React from "react";
import Head from "next/head";
import styles from "../styles/Header.module.scss";

const Header: React.FC = () => {
  return (
    <>
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

      <header className={styles.header}>
        <h1>Contentful Next Jamstack Blog</h1>
        <a href="https://github.com/YutoUrushima" target="_blank" rel="noopener noreferrer">
          <img src="./b-github-icon.png" alt="github" width="30" height="30" />
        </a>
      </header>
    </>
  );
};

export default Header;
