import React from 'react';
import Image from "next/legacy/image";
import Link from 'next/link';
import { FaChevronRight } from 'react-icons/fa';
import formatURL from '@/utils/formatURL';
import styles from '@/styles/Portfolio.module.scss';
import TextAnimation from './TextAnimation';

interface Props {
  project: {
    title: string;
    subtitle: string;
    description: string[];
    image: typeof ImageData | any;
    stack: string[];
    live: string;
    github: string;
    alias: string;
  };
}

const ProjectCard: React.FC<Props> = ({ project }) => (
  <div key={project.title} className={`${styles.card} ${styles[project.alias]}`}>
    <Image
      src={project.image}
      alt={project.title}
      fill
      className={styles.image}
      sizes="(max-width: 767px) 100vw, (min-width: 768px) 30vw, (min-width: 768px) 60vw"
    />
    <section className={styles.content}>
      <div>
        <p className={styles.title}>{project.title}</p>
        <ul className={styles.stack}>
          {project.stack.map((tech) => (
            <li key={tech} className={styles.tech}>{tech}</li>
          ))}
        </ul>
      </div>
      <TextAnimation className={styles.subtitle} type="fade_left" delay={0}>
        {project.subtitle}
      </TextAnimation>
      <Link className="button" href={`/projects/${formatURL(project.title)}`}>
        <span className="sr-only">See this project</span>
        <FaChevronRight />
      </Link>
    </section>
  </div>
);

export default ProjectCard;
