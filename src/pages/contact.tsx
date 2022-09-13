import type { NextPage } from 'next';
import Home from '../components/Home';
import NavBar from '../components/Navbar/Navbar';

const ContactsPage: NextPage = () => {
  return (
    <>
      <NavBar activeItem="Contact"></NavBar>
      <Home></Home>
    </>
  );
};

export default ContactsPage;
