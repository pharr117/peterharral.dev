import '../styles/globals.css'
import Head from 'next/head'
import GlobalLayout from '../components/GlobalLayout'
import React from "react";

function MyApp({ Component, pageProps }) {
  return (
    <React.Fragment>
      <Head>
        <title>Peter Harral // Dev</title>
        <meta name="description" content="The personal site of Peter Harral" />
        <link rel="icon" href="/images/favicon.ico" />
      </Head>
      <GlobalLayout>
        <Component {...pageProps} />
      </GlobalLayout>
    </React.Fragment>
  );
}

export default MyApp
