import Footer from 'components/Footer';
import Navbar from 'components/Navbar/Navbar';
import { Props } from 'interfaces/props';

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
