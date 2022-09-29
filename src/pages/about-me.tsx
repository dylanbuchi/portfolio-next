import type { NextPage } from 'next';

import AboutMe from 'components/AboutMe';
import MyHead from 'components/MyHead';

const AboutMePage: NextPage = () => {
  const imageSrc =
    'https://raw.githubusercontent.com/dylanbuchi/portfolio-next/main/public/assets/images/pages/about-me/about-me-page.jpg?token=GHSAT0AAAAAABLHAUH32HWTRSGRGBXUY45GYZVVIJQ';
  return (
    <>
      <MyHead title="About me" imageSrc={imageSrc} />
      <AboutMe />
    </>
  );
};

export default AboutMePage;
