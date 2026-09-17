import styles from "./Experience.module.css";

const skills = ["Databricks", "PySpark", "SQL", "Python", "Delta Lake", "Fivetran", "ETL / ELT", "Data Quality", "React", "Node.js", "MongoDB"];

export const Experience = () => (
  <section className={styles.container} id="experience">
    <div className={styles.intro}><p>Experience & tools</p><h2>Hands-on delivery, backed by continuous learning.</h2></div>
    <div className={styles.layout}>
      <article className={styles.role}>
        <div><h3>Software Engineer</h3><span>Tata Consultancy Services</span></div>
        <p className={styles.meta}>Data Engineering · India</p>
        <ul>
          <li>Migrated data from 15 sources into a Databricks Bronze layer.</li>
          <li>Implemented Silver-layer CDC using a client ingestion framework.</li>
          <li>Worked with Fivetran-managed sources and added API ingestion capabilities for remaining systems.</li>
          <li>Focused on data validation, maintainable transformations and reliable delivery.</li>
        </ul>
      </article>
      <div className={styles.skills} aria-label="Technical skills">{skills.map(skill => <span key={skill}>{skill}</span>)}</div>
    </div>
  </section>
);

