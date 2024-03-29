import React, { useState, useEffect, useContext } from 'react';
import styles from '@/styles/Footer.module.scss';
import { FaHeart } from 'react-icons/fa';
import { BsArrowUpRightCircleFill } from 'react-icons/bs';
import socialLinks from '@/utils/socialLinks';
import TextAnimation from './TextAnimation';

const Footer: React.FC<{}> = () => {
  const [year, setYear] = useState(0);

  useEffect(() => {
    const date = new Date();
    const currentYear = date.getFullYear();
    setYear(currentYear);
  }, []);

  return (
    <footer className={styles.container}>
      <TextAnimation type="fade_down" delay={0} className={styles.link}>
        <a href="/resume.pdf" target='_blank' className={styles.resume_link} download="01JonathanSivahera">
          <span className="span">Get my Resume</span>
          <BsArrowUpRightCircleFill />
        </a>
      </TextAnimation>
      <ul className={styles.solist}>
        {
          socialLinks.map((item, idx) => (
            <li key={item.link} className={styles.solist_item}>
              <TextAnimation type="fade_down" delay={0 + idx}>
                <a className={styles.solist_item_link} aria-label={item.label} href={item.link} target='_blank' rel="noreferrer">{item.icon}</a>
              </TextAnimation>
            </li>
          ))
        }
      </ul>
      <TextAnimation type="fade_down" delay={0} className={styles.copy}>
        <p>
        Made with <FaHeart className={styles.love} /> by Jonathan Sivahera  • {year}
        </p>
      </TextAnimation>
    </footer>
  );
};

export default Footer;
