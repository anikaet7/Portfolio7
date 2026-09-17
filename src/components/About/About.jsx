import styles from "./About.module.css";
const strengths = [
  { title: "Data engineering", text: "Building ingestion and transformation workflows with Databricks, PySpark, SQL and Delta Lake concepts." },
  { title: "Reliable pipelines", text: "Experience integrating Fivetran and API sources, validating data and applying Silver-layer CDC." },
  { title: "Product mindset", text: "A frontend and MERN foundation that helps me turn technical systems into usable, clearly presented products." },
];

export const About = () => (
  <section className={styles.container} id="about">
    <p className={styles.kicker}>About me</p>
    <div className={styles.headingRow}><h2>Engineering data that teams can trust.</h2><p>I’m a software engineer at TCS focused on growing into a strong Data Engineer. I enjoy converting messy source data into dependable, understandable datasets.</p></div>
    <div className={styles.grid}>{strengths.map((item, index) => <article key={item.title}><span>0{index + 1}</span><h3>{item.title}</h3><p>{item.text}</p></article>)}</div>
  </section>
);
