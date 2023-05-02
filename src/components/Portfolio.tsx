import React, { useEffect } from 'react';
import autoVisibilityToggler from '@/utils/autoVisibilityToggler';
import projects from '@/utils/projects';
import styles from '@/styles/Portfolio.module.scss';
import BreakpointToggle from './BreakpointToggle';
import VisibilityToggle from './VisibilityToggle';
import TextAnimation from './TextAnimation';
import ProjectCard from './ProjectCard';
import Title from './Title';

interface Props {
  componentRef: React.RefObject<HTMLElement>;
  variant: string;
  isVisible: boolean;
}

const Portfolio: React.FC<Props> = ({ componentRef, variant, isVisible }) => {
  useEffect(() => {
    autoVisibilityToggler(isVisible, 'portfolio');
  }, [isVisible]);

  return (
    <section ref={componentRef} id="portfolio" className={styles.container}>
      <TextAnimation className={styles.title_container} type="fade_right" delay={0}>
        <Title index='02' title='Portfolio' subtitle="Overview of my" variant={variant} />
      </TextAnimation>
      <section className={styles.cards}>
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </section>
    </section>
  );
};

export default VisibilityToggle(BreakpointToggle(Portfolio));
