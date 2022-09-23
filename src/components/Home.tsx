import { Devicon } from 'components/Devicon';

import { SOCIAL_LINKS, USERNAME } from 'constants/socials';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

import SocialLink from './SocialLink';

const Home = () => {
  const helloMsg = "Hi, I'm ";
  const deviconBoxStyles =
    'hover:lumos relative ml-4 h-9 w-9 shrink-0 lg:h-10 lg:w-10 h-9 w-9';

  const iconStyle =
    'ml-[0.1rem] cursor-pointer rounded-xl bg-[#dae6f2] p-3 text-3xl shadow-sm shadow-primary_10 transition hover:scale-150 hover:bg-transparent hover:shadow-none dark:bg-[#254d77] dark:shadow-none dark:hover:bg-transparent';

  return (
    <div className="to-add-blur mx-10 flex h-screen flex-col justify-evenly text-base sm:m-0 sm:items-center">
      <div className="mt-auto">
        <p className="text-2xl tracking-wide">
          {helloMsg}
          <span className="text-3xl font-bold tracking-wide text-blue-700 dark:text-accent_primary">
            Dylan
          </span>
          {' a'}
        </p>
        <h1 className="text-5xl font-extrabold leading-tight tracking-wide text-gray-800 dark:text-accent_90">
          Full-Stack Developer
        </h1>
        <div className="mt-10 flex w-[75%] justify-between transition-colors sm:w-[40%] lg:w-[43%] landscape:w-[45%]">
          <SocialLink
            href={`${SOCIAL_LINKS.linkedin.website}/in/${USERNAME}`}
            renderIcon={() => <FaLinkedin />}
            className={
              ' text-[#0077b5] hover:text-[#0077b5] dark:text-white_gray dark:hover:text-[#0077b5] ' +
              iconStyle
            }
          />
          <SocialLink
            href={`${SOCIAL_LINKS.github.website}/${USERNAME}`}
            renderIcon={() => <FaGithub />}
            className={
              'text-[#333] hover:text-[#333]  dark:text-white_gray ' + iconStyle
            }
          />
          <SocialLink
            href={`${SOCIAL_LINKS.twitter.website}/${USERNAME}`}
            renderIcon={() => <FaTwitter />}
            className={
              'hover:t8ext-[#1da1f2] text-[#1da1f2] dark:text-white_gray  dark:hover:text-[#1da1f2] ' +
              iconStyle
            }
          />
        </div>
      </div>
      <div className="-mx-10 mt-auto sm:w-[100%] lg:w-[45%] landscape_max:w-[50%]">
        <div className="w-[100%] ">
          <p className="text-md my-1 ml-10 text-left font-medium sm:ml-0 sm:text-center">
            Built with:
          </p>
          <div className="bg-gradient-to-l from-[#ffffff00] to-primary_30 shadow-sm shadow-primary_10 dark:bg-transparent dark:bg-gradient-to-r dark:from-primary_20 dark:to-primary_10 dark:shadow-none sm:rounded-none lg:rounded-xl lg:rounded-b-none landscape_max:flex landscape_max:justify-center landscape_max:rounded-xl landscape_max:rounded-b-none">
            <div className="flex justify-evenly py-8 px-4 landscape_max:w-full">
              <div
                className={`${deviconBoxStyles} ml-0 rounded-full bg-white_gray text-center`}
              >
                {<Devicon name="nextjs" type="line" />}
              </div>
              <div className={`${deviconBoxStyles}dark:bg-transparent`}>
                {<Devicon name="react" />}
              </div>
              <div className={`${deviconBoxStyles}`}>
                {<Devicon name="typescript" />}
              </div>
              <div className={`${deviconBoxStyles}`}>
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
