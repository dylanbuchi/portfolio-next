import type { AppProps } from 'next/app';
import Head from 'next/head';

import Layout from 'layouts/Layout';
import useIsComponentLoaded from 'utilities/hooks/useIsComponentLoaded';

import 'styles/main.css';

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
        <div
          className={`full-height flex flex-col bg-home bg-cover text-gray_10 dark:bg-primary_10 dark:bg-home_dark dark:text-gray-300`}
        >
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </div>
      </>
    )
  );
};

export default MyApp;
