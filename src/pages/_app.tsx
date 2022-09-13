import NavBar from 'components/Navbar/Navbar';
import type { AppProps } from 'next/app';
import '../styles/main.css';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <NavBar />
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
