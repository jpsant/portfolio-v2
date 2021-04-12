import React from 'react';
import type { AppProps } from 'next/app';
import Router from 'next/router';
import NProgress from 'nprogress';
import Head from 'next/head';
import ContextProviders from '../contexts/contextUtils/providers';
import '../i18n';
import '../foundations/global.scss';
import '../foundations/fonts.scss';

Router.events.on('routeChangeStart', () => {
  NProgress.start();
});

Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <React.Fragment>
      <Head>
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <link rel="stylesheet" type="text/css" href="/static/nprogress.css" />
        <title>JP Santana</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>
      <ContextProviders>
        <Component {...pageProps} />
      </ContextProviders>
    </React.Fragment>
  );
};

export default MyApp;
