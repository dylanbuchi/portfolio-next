import { Disclosure } from '@headlessui/react';
import Link from 'next/link';
import setClassNames from '../../utilities/functions';

interface NavItemProps {
  name: string;
  href?: string;
  className?: string;
  handleActiveNavbarItem: React.MouseEventHandler<HTMLAnchorElement>;
  isMobile?: boolean;
}

const NavItem = ({
  name,
  handleActiveNavbarItem,
  isMobile = false,
  className = '',
  href = '/#',
}: NavItemProps) => {
  const defaultStyle =
    'text-white dark:hover:bg-gray-600 hover:text-whiter hover:bg-teal-600';
  const mobileStyle = `${defaultStyle} block`;

  const display = () =>
    isMobile ? (
      <Disclosure.Button onClick={handleActiveNavbarItem} as={Link} href={href}>
        <a className={setClassNames(mobileStyle, className)}>{name}</a>
      </Disclosure.Button>
    ) : (
      <Link onClick={handleActiveNavbarItem} href={href}>
        <a className={setClassNames(defaultStyle, className)}>{name}</a>
      </Link>
    );

  return <>{display()}</>;
};

export default NavItem;
