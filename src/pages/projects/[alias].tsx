import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { FaChevronLeft, FaChevronRight, FaGithub } from 'react-icons/fa';
import { BsArrowUpRightCircle } from 'react-icons/bs';
import styles from '@/styles/Project.module.scss';
import projects from '@/utils/projects';

interface Props {
  project: {
    title: string;
    subtitle: string;
    description: string[];
    image: string;
    stack: string[];
    live: string;
    github: string;
    alias: string;
  };
  nextAlias: string;
  prevAlias: string;
}

const Project: React.FC<Props> = ({ project, nextAlias, prevAlias }) => {
  const {
    title,
    description,
    image,
    stack,
    live,
    github,
  } = project;

  return (
    <>
      <Head>
          <title>{title}</title>
          <meta name="description" content={description[0]} />
      </Head>
      <main className={styles.container}>
        <Link href="/#portfolio" className={styles.back_link}>
          <span className={styles.back} />
        </Link>
        <h2 className={styles.title}>{title}</h2>
        <section className={styles.content}>
          <div className={styles.image_container}>
            <Image
              src={image}
              alt={title}
              className={styles.image}
            />
          </div>
          <section className={styles.info}>
            <ul className={styles.stack}>
              {stack.map((tech) => (
                <li key={tech} className={styles.tech}>{tech}</li>
              ))}
            </ul>
            {description.map((paragraph, index) => (
              <p key={`para${index}`} className={styles.para}>{paragraph}</p>
            ))}
          </section>
          <section className={styles.links}>
            <Link href={live} className={styles.link}>
              <span className={styles.span}>See live</span>
              <BsArrowUpRightCircle />
            </Link>
            <Link href={github} className={styles.link}>
              <span className={styles.span}>See source</span>
              <FaGithub />
            </Link>
          </section>
        </section>
        <section className={styles.nav}>
        <Link href={`/projects/${prevAlias}`} className={styles.nav_link}>
          <FaChevronLeft />
          <span className={styles.span}>Prev</span>
        </Link>
        <Link href={`/projects/${nextAlias}`} className={styles.nav_link}>
          <span className={styles.span}>Next</span>
          <FaChevronRight />
        </Link>
        </section>
      </main>
    </>
  );
};

export async function getStaticPaths() {
  const paths = await projects.map((project) => ({
    params: { alias: project.alias },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const project = await projects.filter((project) => project.alias === params.alias)[0];
  const idx = projects.indexOf(project);
  let prevAlias;
  let nextAlias;
  if (idx === 0) {
    prevAlias = 'six';
  } else {
    prevAlias = projects[idx - 1].alias;
  }
  if (idx === 5) {
    nextAlias = 'one';
  } else {
    nextAlias = projects[idx + 1].alias;
  }



  return { props: { project, prevAlias, nextAlias } };
}

export default Project;
