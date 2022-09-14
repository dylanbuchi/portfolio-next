import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { SOCIAL_LINKS, USERNAME } from '../constants/socials';

import SocialLink from './SocialLink';

const Home = () => {
  const helloMsg = "Hi, I'm ";

  return (
    <div className="sm:text-center flex justify-center items-start text-left max-w-[1932px] text-gray_10 dark:text-accent_80 m-10 sm:m-0 sm:flex sm:items-center ">
      <div className="sm:mt-14 sm:flex sm:flex-col sm:items-center">
        <h1 className="sm:text-2xl font-normal tracking-wide text-xl">
          {helloMsg}
          <span className="text-2xl sm:text-3xl font-bold dark:text-accent_10 tracking-wide">
            Dylan
          </span>
          {' a'}
        </h1>
        <h1 className="mt-2 text-4xl sm:text-5xl font-black tracking-wide dark:text-accent_90">
          Full-Stack Developer
        </h1>
        <p />
        <div className="landscape:mt-3 flex items-center sm:justify-between py-5 sm:w-[50%] mt-3">
          <SocialLink
            href={`${SOCIAL_LINKS.linkedin.website}/in/${USERNAME}`}
            renderIcon={() => <FaLinkedin />}
            classes="text-[#0077b5] hover:text-[#0077b5] dark:text-white_gray dark:hover:text-[#0077b5]"
          />
          <SocialLink
            href={`${SOCIAL_LINKS.github.website}/${USERNAME}`}
            renderIcon={() => <FaGithub />}
            classes="text-[#333] hover:text-[#333]  dark:text-white_gray"
          />
          <SocialLink
            href={`${SOCIAL_LINKS.twitter.website}/${USERNAME}`}
            renderIcon={() => <FaTwitter />}
            classes="text-[#1da1f2] hover:text-[#1da1f2] dark:text-white_gray  dark:hover:text-[#1da1f2]"
          />
        </div>
      </div>
    </div>
  );
};
export default Home;
