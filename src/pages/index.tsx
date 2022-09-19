import Home from 'components/Home';
import MyHead from 'components/MyHead';
import type { NextPage } from 'next';

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
