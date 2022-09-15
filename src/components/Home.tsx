import { Devicon } from 'components/Devicon';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { SOCIAL_LINKS, USERNAME } from '../constants/socials';

import SocialLink from './SocialLink';

const Home = () => {
  const helloMsg = "Hi, I'm ";

  return (
    <div className="mx-8 mt-0 flex h-full flex-col justify-evenly text-base sm:m-0 sm:items-center">
      <div>
        <p className="text-2xl tracking-wide">
          {helloMsg}
          <span className="text-3xl font-bold tracking-wide text-blue-700 dark:text-accent_10">
            Dylan
          </span>
          {' a'}
        </p>
        <h1 className="text-5xl font-black leading-tight tracking-wide text-gray-800 dark:text-accent_90">
          Full-Stack Developer
        </h1>

        <div className="mt-10 flex w-[75%] justify-between transition-colors sm:w-[40%]">
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
            classes="text-[#1da1f2] hover:t8ext-[#1da1f2] dark:text-white_gray  dark:hover:text-[#1da1f2]"
          />
        </div>
      </div>
      <div className="sm:w-[100%] lg:w-[50%]">
        <div className="w-[100%] ">
          <p className="my-2 text-center text-sm font-medium">Built with:</p>
          <div className="rounded-xl bg-gradient-to-r from-[#9dadbe] to-primary_40 shadow-sm shadow-primary_10 dark:bg-transparent dark:bg-gradient-to-r dark:from-primary_20 dark:to-primary_10 dark:shadow-none sm:rounded-none lg:rounded-xl">
            <div className="flex justify-evenly py-8 px-4">
              <div className="hover:lumos relative  h-9 w-9 shrink-0 rounded-full bg-white_gray text-center lg:h-10 lg:w-10">
                {<Devicon name="nextjs" type="line" />}
              </div>
              <div className="hover:lumos relative ml-4 h-9 w-9 shrink-0 dark:bg-transparent lg:h-10 lg:w-10">
                {<Devicon name="react" />}
              </div>
              <div className="hover:lumos  relative ml-4 h-9 w-9 shrink-0 lg:h-10 lg:w-10">
                {<Devicon name="typescript" />}
              </div>
              <div className="hover:lumos relative ml-4 h-9 w-9 shrink-0 lg:h-10 lg:w-10">
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
