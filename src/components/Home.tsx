import { Devicon } from 'components/Devicon';

import { SOCIAL_LINKS, USERNAME } from 'constants/socials';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

import SocialLink from './SocialLink';

const Home = () => {
  const helloMsg = "Hi, I'm ";
  const deviconBoxStyles =
    'home-icons-after hover:lumos relative ml-4 h-9 w-9 shrink-0 lg:h-10 lg:w-10 h-9 w-9   md:after:left-[160%]';

  const iconStyle =
    'ml-[0.1rem] cursor-pointer rounded-xl bg-[#dae6f2] p-3 text-3xl shadow-sm shadow-primary_10 transition hover:scale-150 hover:bg-transparent hover:shadow-none dark:bg-[#254d77] dark:shadow-none dark:hover:bg-transparent';

  return (
    <div className="custom-scrollbar to-add-blur flex h-full flex-col overflow-auto text-base sm:items-center sm:overflow-hidden">
      <div className="mt-auto  p-10 sm:p-0">
        <h2 className="text-2xl tracking-wide">
          {helloMsg}
          <span className="text-3xl font-bold tracking-wide text-blue-700 dark:text-accent_primary">
            Dylan
          </span>
          {' a'}
        </h2>
        <h1 className="text-5xl font-extrabold leading-tight tracking-wide text-gray-800 dark:text-accent_90">
          Full-Stack Developer
        </h1>
        <div className="flex w-[60%]  justify-between py-10 text-lg transition-colors sm:w-[50%]">
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
      <p className="text-md mt-auto px-2 text-center font-medium sm:ml-0 ">
        Built with:
      </p>
      <div className="relative w-full bg-gradient-to-l from-[#63869a] to-primary_30 shadow-sm shadow-primary_10 dark:bg-transparent dark:bg-gradient-to-r dark:from-primary_20 dark:to-primary_10">
        <div className="flex w-full items-center justify-center p-6 dark:shadow-none landscape_max:flex landscape_max:justify-center">
          <div className="flex w-[100%] items-center justify-evenly sm:w-[65%] md:w-[90%] lg:w-[75%] lg:justify-between">
            <div
              className={`${deviconBoxStyles} ml-0 rounded-full bg-white_gray text-center after:left-[40%] after:content-["NextJs"]`}
            >
              {<Devicon name="nextjs" type="line" />}
            </div>
            <div
              className={`${deviconBoxStyles} after:left-[45%] after:content-["React"] dark:bg-transparent`}
            >
              {<Devicon name="react" />}
            </div>
            <div
              className={`${deviconBoxStyles} after:left-[12%] after:content-["TypeScript"] `}
            >
              {<Devicon name="typescript" />}
            </div>
            <div
              className={`${deviconBoxStyles} after:left-[%] after:content-["TailwindCss"] md:mr-20  lg:mr-24`}
            >
              {<Devicon name="tailwindcss" type="plain" />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
