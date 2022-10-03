import { MutableRefObject, useEffect } from 'react';
import NavItem from './NavItem';

interface NavItemProps {
  previousActiveItem?: string;
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
  previousActiveItem: previousItem,
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

  useEffect(() => {
    if (previousItem !== activeNavbarItem) closePanel && closePanel();
  }, [previousItem, activeNavbarItem, closePanel]);

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
          className={`rounded-md px-3 py-2 text-sm font-medium sm:p-2 md:px-3 md:py-2 ${
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
