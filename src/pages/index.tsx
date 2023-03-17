import React, { useContext } from 'react';
import Head from 'next/head';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import Portfolio from '@/components/Portfolio';
import About from '@/components/About';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import NavProvider, { NavContext } from '@/components/NavContext';
import styles from '@/styles/Home.module.scss';

const Home = () => {
  const { isNavOpen } = useContext(NavContext);

  return (
    <NavProvider>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />

        {/* <meta charset="UTF-8"> */}
        {/* <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="author" content="Jonathan Sivahera">
        <meta name="description" content="I'm a software developer. I can help you build software solutions that will increase your customer base and your revenue.">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta property="og:image" content="./desktop.png">


        <title>Jonathan Sivahera's Portfolio</title>

        <!-- Global site tag (gtag.js) - Google Analytics -->
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-C0JBK824VG"></script>
        <script>
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-C0JBK824VG');
        </script> */}
      </Head>
      <main className={styles.main}>
        <Navigation />
        <Hero />
        <Portfolio />
        <About />
        <Contact />
        <Footer />
      </main>
    </NavProvider>
  );
};

export default Home;
