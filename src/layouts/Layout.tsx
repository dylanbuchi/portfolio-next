import { Props } from 'interfaces/props';

import Footer from 'components/Footer';
import Navbar from 'components/Navbar/Navbar';

const Layout = ({ children }: Props) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
