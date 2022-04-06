import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { CacheProvider } from '@emotion/react';
import theme from '../src/ui/theme';
import createEmotionCache from '../src/createEmotionCache';
import Header from '../src/ui/Header';
import Footer from '../src/ui/Footer';
import Fonts from '../src/ui/Fonts';
import { ConstructionRounded } from '@mui/icons-material';

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

export default function MyApp(props) {

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [value, setValue] = useState(0);
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  useEffect(() => {
    Fonts();
  }, [])

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <meta name="description" key="description" content="We provide the best services in the world. Get a free online estimate now!" />
      </Head>
      <ThemeProvider theme={theme}>
        <Header value={value} setValue={setValue} selectedIndex={selectedIndex} setSelectedIndex={setSelectedIndex} />
        <Component {...pageProps} setValue={setValue} setSelectedIndex={setSelectedIndex} />
        <Footer setValue={setValue} setSelectedIndex={setSelectedIndex} />
      </ThemeProvider>
    </CacheProvider>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  emotionCache: PropTypes.object,
  pageProps: PropTypes.object.isRequired,
};
