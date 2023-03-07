import React, { useContext } from 'react';
import Head from 'next/head';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import Portfolio from '@/components/Portfolio';
import About from '@/components/About';
import Contact from '@/components/Contact';
import NavProvider, { NavContext } from '@/components/NavContext';
import styles from '@/styles/Home.module.scss';

export default function Home() {
  const { isNavOpen } = useContext(NavContext);

  return (
    <NavProvider>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Navigation />
        <Hero />
        <Portfolio />
        <About />
        <Contact />
      </main>
    </NavProvider>
  );
}
