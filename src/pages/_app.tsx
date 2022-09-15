import Footer from 'components/Footer';
import NavBar from 'components/Navbar/Navbar';

import type { AppProps } from 'next/app';
import useIsComponentLoaded from 'utilities/hooks/useIsComponentLoaded';
import '../styles/main.css';

const MyApp = ({ Component, pageProps }: AppProps) => {
  const isLoaded = useIsComponentLoaded();

  return (
    isLoaded && (
      <div className="flex h-screen flex-col overflow-hidden bg-home bg-cover text-gray_10 dark:bg-primary_10 dark:bg-home_dark dark:text-white_gray">
        <NavBar />
        <Component {...pageProps} />
        <Footer />
      </div>
    )
  );
};

export default MyApp;
