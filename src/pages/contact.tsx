import Contact from 'components/Contact/Contact';
import MyHead from 'components/MyHead';
import type { NextPage } from 'next';

const ContactsPage: NextPage = () => {
  const imageSrc =
    'https://raw.githubusercontent.com/dylanbuchi/portfolio-next/main/public/assets/images/pages/contact/contact-page.jpg?token=GHSAT0AAAAAABLHAUH3NSJJ2LCN6HLCFIXGYZVVJJQ';
  return (
    <>
      <MyHead title="Contact" imageSrc={imageSrc} />
      <Contact />
    </>
  );
};

export default ContactsPage;
