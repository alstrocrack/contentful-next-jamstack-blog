import styles from "../styles/Footer.module.scss";

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <small>&copy; Contentful Next Jamstack Blog 2023</small>
    </footer>
  );
};

export default Footer;
