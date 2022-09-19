import Layout from '../layouts/Layout';

import AppContainer from 'containers/AppContainer';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import useIsComponentLoaded from 'utilities/hooks/useIsComponentLoaded';
import '../styles/main.css';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    useIsComponentLoaded() && (
      <>
        <Head>
          <meta http-equiv="X-UA-Compatible" content="ie=edge" />
          <meta http-equiv="Content-Type" content="text/html;charset=UTF-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <meta name="author" content="Dylan Buchi" />
        </Head>
        <AppContainer>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </AppContainer>
      </>
    )
  );
};

export default MyApp;
