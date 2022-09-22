import type { NextPage } from 'next';

import Home from 'components/Home';
import MyHead from 'components/MyHead';

const HomePage: NextPage = () => {
  return (
    <>
      <MyHead />
      <Home />
    </>
  );
};

export default HomePage;
