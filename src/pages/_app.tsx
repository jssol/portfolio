import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import '@/styles/index.scss';
import type { AppProps } from 'next/app';
import { Playfair_Display as PlayfairDisplay, Poppins } from '@next/font/google';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});
const playfairDisplay = PlayfairDisplay({
  subsets: ['latin'],
  weight: ['700'],
});

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleStart = () => setLoading(true);
    const handleComplete = () => setLoading(false);

    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleComplete);
    router.events.on('routeChangeError', handleComplete);

    return () => {
      router.events.off('routeChangeStart', handleStart);
      router.events.off('routeChangeComplete', handleComplete);
      router.events.off('routeChangeError', handleComplete);
    };
  }, [router]);

  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${poppins.style.fontFamily}, sans-serif;
        }

        h1, h2, h3, h4, h5, h6 {
          font-family: ${playfairDisplay.style.fontFamily}, serif;
          font-weight: 700;
        }

        input, textarea, body {
          font-family: ${poppins.style.fontFamily}, sans-serif;
        }
      `}</style>
      {loading && <p>Loading...</p>} {/* show Loader component if loading */}
      <Component {...pageProps} />
    </>
  );
}
