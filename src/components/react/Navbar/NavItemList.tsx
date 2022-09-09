import {
  navItemActiveStyle,
  navItemNames,
} from '../../../global/Navbar/navbar-items';
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
  const display = () =>
    [...navItemNames].map((name) => (
      <NavItem
        isMobile={isMobile}
        key={name}
        name={name}
        handleActiveNavbarItem={() => handleActiveNavbarItem(name)}
        className={`transition duration-100 px-3 py-2 rounded-md text-sm font-medium ${
          name === activeNavbarItem ? navItemActiveStyle : ''
        }`}
      />
    ));

  return <>{display()}</>;
}
