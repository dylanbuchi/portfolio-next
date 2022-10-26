import { SOCIAL_LINKS, USERNAME } from 'constants/socials';
import Image from 'next/image';
import Link from 'next/link';

import SkillsCard from './Cards/SkillsCard';
import CertificatesCarousel from './CertificatesCarousel';
import Divider from './Divider';
import profileImage from '/public/assets/images/pages/about-me/profile.jpg';

import { v4 as uuidv4 } from 'uuid';

const user = {
  name: 'Dylan Buchi',
  role: 'Self-taught Software Engineer',
  imgSrc: profileImage.src,
  bio: `I started my coding journey in 2019. Since then I've studied tech, freelanced, contributed to open-source, and built projects that are publicly available on my Github account.

  One of the things that made me fall in love with software development is that the tech industry is constantly evolving, which keeps things interesting and allows me to grow and acquire new skills.

  I'm always learning and improving to be a better developer and now I'm currently focused on web development, web3, and blockchain.
  `,
};

const AboutMe = () => {
  const displayBio = () => {
    const linkStyles =
      'blue-900 border-b-[0.22em] border-blue-900 border-x-white_gray border-opacity-50 dark:border-accent_primary dark:border-opacity-60  inline-block h-[1.35em] mr-1';
    return user.bio.split(' ').map((word) => {
      const wordWithSpace = `${word} `;
      if (['github', 'projects'].includes(word.toLocaleLowerCase())) {
        if (word.toLocaleLowerCase() === 'github')
          return (
            <Link
              key={uuidv4()}
              href={`${SOCIAL_LINKS.github.website}/${USERNAME}`}
              target="_blank"
              rel="noopener noreferrer"
              className={linkStyles}
            >
              {wordWithSpace}
            </Link>
          );
        else {
          return (
            <Link
              key={uuidv4()}
              href={`/projects`}
              className={`${linkStyles}  h-[1.51em] pb-[0.1em]`}
            >
              {wordWithSpace}
            </Link>
          );
        }
      }

      return wordWithSpace;
    });
  };

  return (
    <div className="custom-scrollbar to-add-blur mb-auto h-full overflow-auto bg-primary_90 dark:bg-primary_10">
      <div className="my-6 px-5 sm:pb-0">
        <div className="flex flex-col sm:flex-row-reverse sm:items-start sm:justify-center">
          <div className="sm:flex sm:flex-col sm:items-center ">
            <div className="rounded-xl shadow-sm shadow-gray-600 dark:shadow-black sm:h-[75%] sm:w-[75%]">
              <Image
                className="text-centers max-w-[100%] rounded-xl object-cover"
                src={user.imgSrc}
                alt="profile"
                width={100}
                height={100}
                sizes="100vw"
                style={{
                  maxWidth: 'inherit',
                  maxHeight: 'inherit',
                }}
              />
            </div>
            <div className="text-lg leading-6 sm:h-[75%] sm:w-[75%]">
              <h2 className="mt-2 font-semibold">{user.name}</h2>
              <h3 className="mb-2 font-bold text-blue-800 dark:text-accent_primary">
                {user.role}
              </h3>
            </div>
          </div>

          <div className="sm:w-[70%]">
            <div className="mt-10 rounded-xl bg-white_gray p-6 text-lg  shadow-sm shadow-gray-600 dark:bg-primary_20 dark:shadow-black sm:m-10 sm:mt-0">
              <h1 className="mb-2 text-2xl font-bold dark:text-white_gray">
                About me
              </h1>
              <p className="max-w-[1280px] whitespace-pre-line leading-snug">
                {displayBio()}
              </p>
            </div>
            <SkillsCard />
          </div>
        </div>
        <div className="mt-10">
          <Divider name="Certificates" />
        </div>
        <div className=" mt-2 flex justify-center">
          <div className="w-[90%] sm:w-[40%] ">
            <CertificatesCarousel />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
