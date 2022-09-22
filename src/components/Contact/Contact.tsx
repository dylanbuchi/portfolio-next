import { MailIcon, PhoneIcon } from '@heroicons/react/outline';
import { SOCIAL_LINKS, USERNAME } from 'constants/socials';

import ContactForm from 'components/Contact/ContactForm';
import SocialLink from 'components/SocialLink';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className="to-add-blur h-screen overflow-y-auto bg-[#c5d6e5] dark:bg-primary_10">
      <h2 className="sr-only">Contact information</h2>
      <div className="relative grid grid-cols-1 lg:h-full lg:grid-cols-3">
        <div className="bg-contact bg-cover  p-6 dark:bg-primary_30 dark:bg-contact_dark sm:bg-center sm:px-10 lg:h-full xl:p-12">
          <h3 className="text-xl font-medium">Contact information</h3>

          <dl className="mt-2 space-y-6">
            <dt>
              <span className="sr-only">Phone number</span>
            </dt>
            <dd className="flex text-base">
              <PhoneIcon className="h-6 w-6 flex-shrink-0" aria-hidden="true" />
              <span className="ml-3">+55 32 98410 3562</span>
            </dd>
            <dt>
              <span className="sr-only">Email</span>
            </dt>
            <dd className="flex text-base ">
              <MailIcon className="h-6 w-6 flex-shrink-0" aria-hidden="true" />
              <span className="ml-3">devybuchi@gmail.com</span>
            </dd>
          </dl>
          <ul className="mt-8 flex space-x-12">
            <SocialLink
              href={`${SOCIAL_LINKS.linkedin.website}/in/${USERNAME}`}
              renderIcon={() => (
                <div className="hover:rounded-sm hover:border-black hover:bg-white_gray">
                  <FaLinkedin className="h-6  w-6  hover:scale-[1.28] hover:text-linkedin dark:hover:text-linkedin" />
                </div>
              )}
            />
            <div className="hover:rounded-full hover:border-black hover:bg-white_gray">
              <SocialLink
                href={`${SOCIAL_LINKS.github.website}/${USERNAME}`}
                renderIcon={() => (
                  <FaGithub className="h-6 w-6 hover:scale-[1.28] dark:hover:text-github" />
                )}
              />
            </div>
            <SocialLink
              href={`${SOCIAL_LINKS.twitter.website}/${USERNAME}`}
              renderIcon={() => (
                <FaTwitter className="h-6 w-6  hover:scale-[1.28]  hover:text-twitter" />
              )}
            />
          </ul>
        </div>
        <div className="h-[full] px-6 sm:px-10 lg:col-span-2 lg:my-auto xl:p-12">
          <ContactForm
            action="#"
            method="POST"
            className={'grid grid-cols-1 sm:grid-cols-2 sm:gap-x-8'}
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
