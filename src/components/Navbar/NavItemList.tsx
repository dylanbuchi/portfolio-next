import NavItem from './NavItem';

interface NavItemProps {
  handleActiveNavbarItem: (name: string) => void;
  isMobile?: boolean;
  activeNavbarItem: string;
}

export default function NavItemList({
  handleActiveNavbarItem,
  activeNavbarItem,
  isMobile = false,
}: NavItemProps) {
  const activeStyle =
    'bg-gray-900 text-white cursor-default pointer-events-none';

  const navItemNames = new Set<string>([
    'Home',
    'Projects',
    'Certificates',
    'About me',
    'Contact',
  ]);

  const display = () =>
    [...navItemNames].map((name) => (
      <NavItem
        isMobile={isMobile}
        key={name}
        name={name}
        handleActiveNavbarItem={() => handleActiveNavbarItem(name)}
        className={`px-3 py-2 rounded-md text-sm font-medium ${
          name === activeNavbarItem ? activeStyle : ''
        }`}
      />
    ));

  return <>{display()}</>;
}
