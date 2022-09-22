import Contact from 'components/Contact/Contact';
import MyHead from 'components/MyHead';
import type { NextPage } from 'next';

const ContactsPage: NextPage = () => {
  return (
    <>
      <MyHead title="Contact" />
      <Contact />
    </>
  );
};

export default ContactsPage;
