import styles from "./Hero.module.css";

export const Hero = () => (
  <header className={styles.container}>
    <div className={styles.content}>
      <p className={styles.eyebrow}>Data Engineer · TCS</p>
      <h1 className={styles.title}>Hi, I’m Anikaet. I build reliable data pipelines and practical web products.</h1>
      <p className={styles.description}>I work with Databricks, PySpark, SQL and Python, with hands-on experience moving multi-source data through Bronze and Silver layers and implementing CDC.</p>
      <div className={styles.actions}>
        <a href="#projects" className={styles.primaryBtn}>View my work</a>
        <a href="mailto:anikaetuppal99@gmail.com" className={styles.secondaryBtn}>Contact me</a>
      </div>
      <ul className={styles.highlights} aria-label="Career highlights">
        <li><strong>15</strong><span>data sources migrated</span></li>
        <li><strong>Lakehouse</strong><span>Bronze-to-Silver pipelines</span></li>
        <li><strong>MERN</strong><span>full-stack project experience</span></li>
      </ul>
    </div>
    <div className={styles.visual} aria-hidden="true"><div className={styles.codeCard}><span>pipeline.py</span><pre>{`source → bronze\nbronze → validate\nvalidate → silver\nsilver → CDC`}</pre></div></div>
  </header>
);
