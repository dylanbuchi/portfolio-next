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
      className={`bg-[#dae6f2] dark:bg-[#254d77] shadow-sm dark:shadow-none shadow-primary_10 p-3 rounded sm:text-3xl cursor-pointer hover:shadow-none hover:bg-transparent dark:hover:bg-transparent transition hover:scale-150 ${classes} mr-8 text-xl sm:m-0`}
    >
      {renderIcon()}
    </a>
  );
};

export default SocialLink;
