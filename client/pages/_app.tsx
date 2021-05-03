/* eslint-disable react/jsx-props-no-spreading */
import '../styles/globals.scss';
import React from 'react';
import { AppProps } from 'next/app';

function Application({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default Application;
