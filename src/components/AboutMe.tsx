import Image from 'next/image';

import SkillsCard from './Cards/SkillsCard';
import CertificatesCarousel from './CertificatesCarousel';
import Divider from './Divider';
import profileImage from '/public/assets/images/pages/about-me/profile.jpg';

const user = {
  name: 'Dylan Buchi',
  role: 'Self-taught Software Engineer',
  imgSrc: profileImage.src,
  bio: `I started my coding journey in 2019. Since then, I'm always learning and expanding my skill set. I've freelanced, contributed to open-source and built many projects that are publicly available on my Github account.
One of the things that made me fall in love with software development is that the tech industry is constantly evolving, which keeps things interesting and allows me to grow and acquire new skills.
Currently focused on web development, web3 and blockchain.
  `,
};

const AboutMe = () => {
  return (
    <div className="to-add-blur mb-auto h-full overflow-auto bg-primary_90 dark:bg-primary_10">
      <div className="my-6 px-5 sm:pb-0">
        <div className="flex flex-col sm:flex-row-reverse sm:items-start sm:justify-center">
          <div>
            <div className="rounded-xl shadow-sm shadow-gray-600 dark:shadow-black">
              <Image
                className="text-centers max-w-[100%] rounded-xl object-cover"
                src={user.imgSrc}
                alt="profile"
                width="100%"
                height="100%"
                layout="responsive"
              />
            </div>
            <div className="text-lg leading-6">
              <h2 className="mt-2 font-semibold">{user.name}</h2>
              <h3 className="mb-2 font-bold text-blue-800 dark:text-accent_primary">
                {user.role}
              </h3>
            </div>
          </div>

          <div className="sm:w-[70%]">
            <div className="mt-10 rounded-xl  bg-white_gray p-6 text-lg  shadow-sm shadow-gray-600 dark:bg-primary_20 dark:shadow-black sm:m-10 sm:mt-0">
              <h1 className="mb-2 text-2xl font-bold dark:text-white_gray">
                About me
              </h1>
              <p className="whitespace-pre-line">{user.bio}</p>
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
