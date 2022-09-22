import type { NextPage } from 'next';

import Home from 'components/Home';
import MyHead from 'components/MyHead';

const HomePage: NextPage = () => {
  const title = 'Dylan Buchi: Portfolio';
  const description = 'The personal portfolio of Dylan Buchi';

  return (
    <>
      <MyHead title={title} description={description} />
      <Home />
    </>
  );
};

export default HomePage;
