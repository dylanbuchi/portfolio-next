import { Disclosure } from '@headlessui/react';
import setClassNames from '../../../utilities/functions';

interface NavItemProps {
  name: string;
  href?: string;
  className?: string;
  handleActiveNavbarItem: React.MouseEventHandler<HTMLAnchorElement>;
  isMobile?: boolean;
}

export default function NavItem({
  name,
  handleActiveNavbarItem,
  isMobile = false,
  className = '',
  href = '/#',
}: NavItemProps) {
  const defaultStyle = 'text-gray-300 hover:bg-gray-700 hover:text-white';
  const mobileStyle = `${defaultStyle} block`;

  const display = () =>
    isMobile ? (
      <Disclosure.Button
        onClick={handleActiveNavbarItem}
        as="a"
        href={href}
        className={setClassNames(mobileStyle, className)}
      >
        {name}
      </Disclosure.Button>
    ) : (
      <a
        onClick={handleActiveNavbarItem}
        href={href}
        className={setClassNames(defaultStyle, className)}
      >
        {name}
      </a>
    );
  return <>{display()}</>;
}