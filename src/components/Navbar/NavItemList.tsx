import { MutableRefObject } from 'react';
import NavItem from './NavItem';

interface NavItemProps {
  handleActiveNavbarItem: (route: string) => void;
  isMobile?: boolean;
  activeNavbarItem: string;
  closePanel?: (
    focusableElement?:
      | HTMLElement
      | MutableRefObject<HTMLElement | null>
      | undefined,
  ) => void;
}

type Name = string;
type Route = string;

type NavItems = [Name, Route];

const NavItemList = ({
  handleActiveNavbarItem,
  activeNavbarItem,
  isMobile = false,
  closePanel,
}: NavItemProps) => {
  const navItems = new Set<NavItems>([
    ['Home', '/'],
    ['About me', '/about-me'],
    ['Projects', '/projects'],
    ['Contact', '/contact'],
  ]);

  const navItemActiveStyle =
    'dark:bg-primary_10 bg-primary_20 text-white cursor-default pointer-events-none sm:p-2 md:px-3 md:py-2';

  const display = () =>
    Array.from(navItems).map(([name, route]) => {
      return (
        <NavItem
          href={route}
          isMobile={isMobile}
          key={route}
          name={name}
          handleActiveNavbarItem={() => {
            isMobile && closePanel && closePanel();
            handleActiveNavbarItem(route);
          }}
          className={`rounded-md px-3 py-2 text-sm font-medium transition duration-100 sm:p-2 md:px-3 md:py-2 ${
            route === activeNavbarItem.toLocaleLowerCase()
              ? navItemActiveStyle
              : ''
          }`}
        />
      );
    });

  return <>{display()}</>;
};

export default NavItemList;
