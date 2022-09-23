import type { AppProps } from 'next/app';

import Layout from 'layouts/Layout';
import useIsComponentLoaded from 'utilities/hooks/useIsComponentLoaded';

import 'styles/main.css';
import MyHead from 'components/MyHead';

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
