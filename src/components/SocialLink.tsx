import type { ReactElement } from 'react';
import type { IconType } from 'react-icons';

interface SocialLinkProps {
  renderIcon: () => ReactElement<IconType>;
  href: string;
  classes?: string;
}

const SocialLink = ({
  renderIcon,
  href = '/#',
  classes = '',
}: SocialLinkProps) => {
  return (
    <a
      target="_blank"
      rel="noopener noreferrer"
      href={href}
      className={`bg-[#bed6d6] dark:bg-[#1c5e5e] shadow-sm dark:shadow-none shadow-greyDarker p-3 rounded text-3xl cursor-pointer hover:shadow-none hover:bg-white transition hover:scale-150 dark:shadow-white dark:hover:bg-gray-900 ${classes}`}
    >
      {renderIcon()}
    </a>
  );
};

export default SocialLink;
