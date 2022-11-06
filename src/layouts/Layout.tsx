import { Props } from 'interfaces/props';

import Footer from 'components/Footer';
import Navbar from 'components/Navbar/Navbar';
import { useRouter } from 'next/router';

const Layout = ({ children }: Props) => {
  const router = useRouter();
  const itsNot404Page = router.pathname !== '/404';

  return (
    <>
      {itsNot404Page && <Navbar />}
      {children}
      {itsNot404Page && <Footer />}
    </>
  );
};

export default Layout;
