import NavBar from 'components/Navbar/Navbar';
import type { AppProps } from 'next/app';
import useIsComponentLoaded from 'utilities/hooks/useIsComponentLoaded';
import '../styles/main.css';

const MyApp = ({ Component, pageProps }: AppProps) => {
  const isLoaded = useIsComponentLoaded();

  return (
    isLoaded && (
      <>
        <NavBar />
        <Component {...pageProps} />
      </>
    )
  );
};

export default MyApp;
