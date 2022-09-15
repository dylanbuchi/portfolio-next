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
      className={`ml-[0.1rem] cursor-pointer rounded-xl bg-[#dae6f2]  p-3 shadow-sm shadow-primary_10 transition hover:scale-150 hover:bg-transparent hover:shadow-none dark:bg-[#254d77] dark:shadow-none dark:hover:bg-transparent ${classes} text-3xl`}
    >
      {renderIcon()}
    </a>
  );
};

export default SocialLink;
