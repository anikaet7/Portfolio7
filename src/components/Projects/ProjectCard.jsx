import styles from "./ProjectCard.module.css";
import { getImageUrl } from "../../utils";

export const ProjectCard = ({ project: { title, imageSrc, description, skills, source } }) => (
  <article className={styles.container}>
    <img src={getImageUrl(imageSrc)} alt="" className={styles.image} loading="lazy" />
    <div className={styles.body}>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      <ul className={styles.skills}>{skills.map(skill => <li key={skill} className={styles.skill}>{skill}</li>)}</ul>
      <a href={source} className={styles.link} target="_blank" rel="noreferrer">View source <span aria-hidden="true">↗</span></a>
    </div>
  </article>
);

