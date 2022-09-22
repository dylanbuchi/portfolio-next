import type { AppProps } from 'next/app';
import Head from 'next/head';

import Layout from 'layouts/Layout';
import useIsComponentLoaded from 'utilities/hooks/useIsComponentLoaded';

import 'styles/main.css';
import MyHead from 'components/MyHead';

const DEFAULT_IMG_SRC =
  'https://user-images.githubusercontent.com/52018183/97459431-89ff8300-191a-11eb-93c2-36a04db97006.png';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    useIsComponentLoaded() && (
      <>
        <MyHead />
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
