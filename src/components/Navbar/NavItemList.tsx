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
    'dark:bg-primary_10 bg-primary_20 text-white cursor-default pointer-events-none';

  const display = () =>
    Array.from(navItemNamesAndRoutes).map(([name, route]) => {
      return (
        <NavItem
          href={route}
          isMobile={isMobile}
          key={route}
          name={name}
          handleActiveNavbarItem={() => handleActiveNavbarItem(route)}
          className={`transition duration-100 px-3 py-2 rounded-md text-sm font-medium ${
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
