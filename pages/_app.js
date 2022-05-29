import '../styles/globals.css'
import Head from 'next/head'
import GlobalLayout from '../components/GlobalLayout'

function MyApp({ Component, pageProps }) {
  return (
    <GlobalLayout>
      <Head>
        <title>Peter Harral // Dev</title>
        <meta name="description" content="The personal site of Peter Harral" />
        <link rel="icon" href="/images/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </GlobalLayout>
  );
}

export default MyApp
