import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { SOCIAL_LINKS, USERNAME } from '../constants/socials';

import SocialLink from './SocialLink';

const Home = () => {
  const helloMsg = "Hi, I'm ";

  return (
    <div className="sm:text-center flex justify-center m-h-screen mt-14 text-left max-w-[1932px]">
      <div className="sm:flex sm:flex-col sm:items-center">
        <h1 className="sm:text-2xl font-normal tracking-wide text-zinc-800 dark:text-grey text-lg">
          {helloMsg}
          <span className="text-xl sm:text-3xl text-teal-700 font-bold dark:text-teal-500">
            Dylan
          </span>
          {' a'}
        </h1>
        <h1 className="mt-4 text-3xl sm:text-5xl font-extrabold tracking-wide text-zinc-800 dark:text-white">
          Full-Stack Developer
        </h1>
        <p />
        <div className="landscape:mt-8 flex items-center sm:justify-between py-5 sm:w-[50%] mt-3">
          <SocialLink
            href={`${SOCIAL_LINKS.linkedin.website}/in/${USERNAME}`}
            renderIcon={() => <FaLinkedin />}
            classes="hover:text-[#0077b5]"
          />
          <SocialLink
            href={`${SOCIAL_LINKS.github.website}/${USERNAME}`}
            renderIcon={() => <FaGithub />}
            classes="hover:text-[#333] dark:hover:text-white"
          />
          <SocialLink
            href={`${SOCIAL_LINKS.twitter.website}/${USERNAME}`}
            renderIcon={() => <FaTwitter />}
            classes="hover:text-[#1da1f2]"
          />
        </div>
      </div>

      <div className="landscape:hidden lg:landscape:block fixed bottom-0 bg-teal-900 w-screen p-10 justify-center items-center dark:bg-greyDark" />
    </div>
  );
};
export default Home;
