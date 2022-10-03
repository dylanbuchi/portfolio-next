import Link from 'next/link';

import { Disclosure } from '@headlessui/react';
import setClassNames from 'utilities/functions';

interface NavItemProps {
  name: string;
  href?: string;
  className?: string;
  isMobile?: boolean;
}

const NavItem = ({
  name,
  isMobile = false,
  className = '',
  href = '/#',
}: NavItemProps) => {
  const defaultStyle =
    'dark:hover:bg-primary_30 hover:text-white dark:hover:text-white hover:bg-primary_30';
  const mobileStyle = `${defaultStyle} block`;

  const display = () =>
    isMobile ? (
      <Disclosure.Button as={Link} href={href}>
        <a className={setClassNames(mobileStyle, className)}>{name}</a>
      </Disclosure.Button>
    ) : (
      <Link href={href}>
        <a className={setClassNames(defaultStyle, className)}>{name}</a>
      </Link>
    );

  return <>{display()}</>;
};

export default NavItem;
