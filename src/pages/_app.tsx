import Footer from 'components/Footer';
import NavBar from 'components/Navbar/Navbar';
import type { AppProps } from 'next/app';
import useIsComponentLoaded from 'utilities/hooks/useIsComponentLoaded';
import '../styles/main.css';

const MyApp = ({ Component, pageProps }: AppProps) => {
  const isLoaded = useIsComponentLoaded();

  return (
    isLoaded && (
      <main className="flex min-h-[100vh] min-w-[100vw] flex-col bg-home bg-cover text-gray_10 dark:bg-primary_10 dark:bg-home_dark dark:text-white_gray">
        <NavBar />
        <Component {...pageProps} />
        <Footer />
      </main>
    )
  );
};

export default MyApp;
