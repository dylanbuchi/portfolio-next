import { Props } from 'interfaces/props';
import Link from 'next/link';
import type { ReactElement } from 'react';
import type { IconType } from 'react-icons';

interface SocialLinkProps extends Props {
  renderIcon: () => ReactElement<IconType>;
  href: string;
}

const SocialLink = ({
  renderIcon,
  href = '/#',
  className = '',
}: SocialLinkProps) => {
  return (
    <Link href={href}>
      <a target="_blank" rel="noopener noreferrer" className={`${className}`}>
        {renderIcon()}
      </a>
    </Link>
  );
};

export default SocialLink;
