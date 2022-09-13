import type { NextPage } from 'next';
import Home from '../components/Home';
import NavBar from '../components/Navbar/Navbar';

const HomePage: NextPage = () => {
  return (
    <>
      <NavBar activeItem="Home"></NavBar>
      <Home></Home>
    </>
  );
};

export default HomePage;
