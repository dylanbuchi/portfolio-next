import type { NextPage } from 'next';
import Home from '../components/Home';
import NavBar from '../components/Navbar/Navbar';

const AboutMePage: NextPage = () => {
  return (
    <>
      <NavBar activeItem="About Me"></NavBar>
      <Home></Home>
    </>
  );
};

export default AboutMePage;
