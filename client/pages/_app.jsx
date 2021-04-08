/* eslint-disable react/jsx-props-no-spreading */
import '../styles/globals.scss';
import React from 'react';

function Application({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default Application;
