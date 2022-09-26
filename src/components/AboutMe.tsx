import Image from 'next/image';

import SkillsCard from './Cards/SkillsCard';
import profileImage from '/public/assets/images/pages/about-me/profile.jpg';

const user = {
  name: 'Dylan Buchi',
  role: 'Self-taught Software Engineer',
  imgSrc: profileImage.src,
  bio: `
Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima tempore ratione consectetur quas voluptatem, esse accusantium, consequatur explicabo, tempora expedita voluptatum. Veniam nulla consectetur cum, blanditiis consequatur odio amet facilis.
Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima tempore ratione consectetur quas voluptatem, esse accusantium, consequatur explicabo, tempora expedita voluptatum. Veniam nulla consectetur cum, blanditiis consequatur odio amet facilis.
  `,
};

const AboutMe = () => {
  return (
    <div className="to-add-blur mb-auto h-full overflow-auto bg-primary_90 dark:bg-primary_10">
      <div className="my-6 px-5 sm:pb-0">
        <div className="flex flex-col sm:flex-row-reverse sm:items-start sm:justify-center">
          <div>
            <Image
              className="max-w-[100%] rounded-xl object-cover text-center shadow-lg "
              src={user.imgSrc}
              alt="profile"
              width="100%"
              height="100%"
              layout="responsive"
            />
            <div className="text-lg leading-6">
              <h2 className="mt-2 font-semibold">{user.name}</h2>
              <h3 className="mb-2 font-bold text-blue-800 dark:text-accent_primary">
                {user.role}
              </h3>
            </div>
          </div>

          <div className="sm:w-[60%]">
            <div className="mt-10 rounded-xl bg-white_gray p-6 text-lg dark:bg-primary_20 sm:m-10 sm:mt-0">
              <h1 className="mb-2 text-2xl font-bold dark:text-white_gray">
                About me
              </h1>
              <p className="">{user.bio}</p>
            </div>
            <SkillsCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
