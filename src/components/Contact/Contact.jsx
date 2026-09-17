import styles from "./Contact.module.css";

export const Contact = () => (
  <footer id="contact" className={styles.container}>
    <div className={styles.text}><p>Let’s build something useful</p><h2>Open to Data Engineering opportunities and thoughtful technical conversations.</h2></div>
    <div className={styles.links}>
      <a href="mailto:anikaetuppal99@gmail.com">Email me</a>
      <a href="https://www.linkedin.com/in/anikaet-uppal-9a8748238" target="_blank" rel="noreferrer">LinkedIn</a>
      <a href="https://github.com/anikaet7" target="_blank" rel="noreferrer">GitHub</a>
    </div>
  </footer>
);

