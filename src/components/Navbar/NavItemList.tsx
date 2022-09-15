import NavItem from './NavItem';

interface NavItemProps {
  handleActiveNavbarItem: (route: string) => void;
  isMobile?: boolean;
  activeNavbarItem: string;
}

const NavItemList = ({
  handleActiveNavbarItem,
  activeNavbarItem,
  isMobile = false,
}: NavItemProps) => {
  const navItemNamesAndRoutes = new Set<string[]>([
    ['Home', '/'],
    ['About me', '/about-me'],
    ['Projects', '/projects'],
    ['Certificates', '/certificates'],
    ['Contact', '/contact'],
  ]);

  const navItemActiveStyle =
    'dark:bg-primary_10 bg-primary_20 text-white cursor-default pointer-events-none sm:p-2 md:px-3 md:py-2';

  const display = () =>
    Array.from(navItemNamesAndRoutes).map(([name, route]) => {
      return (
        <NavItem
          href={route}
          isMobile={isMobile}
          key={route}
          name={name}
          handleActiveNavbarItem={() => handleActiveNavbarItem(route)}
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
