import type { NextPage } from 'next';

import AboutMe from 'components/AboutMe';
import MyHead from 'components/MyHead';

const AboutMePage: NextPage = () => {
  return (
    <>
      <MyHead title="About me" />
      <AboutMe />
    </>
  );
};

export default AboutMePage;
