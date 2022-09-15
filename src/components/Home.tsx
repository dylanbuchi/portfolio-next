import { Devicon } from 'components/Devicon';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { SOCIAL_LINKS, USERNAME } from '../constants/socials';

import SocialLink from './SocialLink';

const Home = () => {
  const helloMsg = "Hi, I'm ";

  return (
    <div className="m-10 mt-20 flex max-w-[1932px] text-left text-gray_10 dark:text-accent_80 sm:m-0 sm:flex sm:justify-center md:mt-20 md:h-[45vh] lg:mt-4  lg:h-[60vh]">
      <div className="max-h h-[100%] sm:mt-10 sm:flex sm:flex-col sm:items-center sm:justify-evenly ">
        <h1 className="text-xl font-normal tracking-wide sm:text-2xl">
          {helloMsg}
          <span className="text-2xl font-bold tracking-wide text-blue-700 dark:text-accent_10 sm:text-3xl">
            Dylan
          </span>
          {' a'}
        </h1>
        <h1 className="mt-2 text-4xl font-black tracking-wide text-gray-800 dark:text-accent_90 sm:text-5xl">
          Full-Stack Developer
        </h1>
        <p />
        <div className="x mt-3 flex items-center py-5 transition-colors sm:w-[50%] sm:justify-between landscape:mt-3">
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
        <div className="mb-10 sm:flex sm:w-[90%] sm:flex-col sm:items-center sm:justify-center">
          <p className="mt-5 text-left text-sm font-medium">Built with:</p>
          <div className="mt-2 w-fit rounded-2xl bg-gradient-to-l from-[#dae6f2] to-primary_30 p-4 shadow-sm shadow-primary_10 dark:bg-transparent dark:bg-gradient-to-r dark:from-primary_20 dark:to-primary_10 dark:shadow-none sm:w-[80%]">
            <div className="items center flex sm:justify-around">
              <div className="hover:lumos relative  h-9 w-9 shrink-0 rounded-full bg-white_gray text-center">
                {<Devicon name="nextjs" type="line" />}
              </div>
              <div className="hover:lumos relative ml-4 h-9 w-9 shrink-0 dark:bg-transparent">
                {<Devicon name="react" />}
              </div>
              <div className="hover:lumos  relative ml-4 h-9 w-9 shrink-0">
                {<Devicon name="typescript" />}
              </div>
              <div className="hover:lumos relative ml-4 h-9 w-9 shrink-0">
                {<Devicon name="tailwindcss" type="plain" />}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
