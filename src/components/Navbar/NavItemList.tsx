import NavItem from './NavItem';

interface NavItemProps {
  handleActiveNavbarItem: (name: string) => void;
  isMobile?: boolean;
  activeNavbarItem: string;
}

const NavItemList = ({
  handleActiveNavbarItem,
  activeNavbarItem,
  isMobile = false,
}: NavItemProps) => {
  const navItemNames = new Set<string>([
    'Home',
    'About me',
    'Projects',
    'Certificates',
    'Contact',
  ]);

  const navItemActiveStyle =
    'dark:bg-greyDarker bg-teal-700 text-whiter cursor-default pointer-events-none';

  const display = () =>
    [...Array.from(navItemNames)].map((name) => (
      <NavItem
        href={
          name === 'Home'
            ? '/'
            : `/${name.trim().toLocaleLowerCase().replace(' ', '-')}`
        }
        isMobile={isMobile}
        key={name}
        name={name}
        handleActiveNavbarItem={() => handleActiveNavbarItem(name)}
        className={`transition duration-100 px-3 py-2 rounded-md text-sm font-medium ${
          name.toLocaleLowerCase() === activeNavbarItem.toLocaleLowerCase()
            ? navItemActiveStyle
            : ''
        }`}
      />
    ));

  return <>{display()}</>;
};

export default NavItemList;
