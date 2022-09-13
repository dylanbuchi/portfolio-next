import type { NextPage } from 'next';
import Home from '../components/Home';
import NavBar from '../components/Navbar/Navbar';

const CertificatesPage: NextPage = () => {
  return (
    <>
      <NavBar activeItem="Certificates"></NavBar>
      <Home></Home>
    </>
  );
};

export default CertificatesPage;
