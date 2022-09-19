import MyHead from 'components/MyHead';
import Container from 'containers/Container';
import type { NextPage } from 'next';

const AboutMePage: NextPage = () => {
  return (
    <>
      <MyHead title="About me" />
      <Container></Container>
    </>
  );
};

export default AboutMePage;
