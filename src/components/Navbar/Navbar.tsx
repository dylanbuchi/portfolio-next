import { Disclosure } from '@headlessui/react';

import { useState } from 'react';
import useIsComponentLoaded from '../../utilities/hooks/useIsComponentLoaded';

import MobileMenuButton from '../Buttons/MobileMenuButton';
import ToggleDarkModeToggle from '../Buttons/ToggleDarkModeButton';
import NavItemList from './NavItemList';

interface NavBarProps {
  activeItem?: string;
}

const NavBar = ({ activeItem = 'Home' }: NavBarProps) => {
  const [activeNavbarItem, setActiveNavbarItem] = useState(activeItem);
  const isLoaded = useIsComponentLoaded();

  const handleActiveNavbarItem = (name: string) => {
    setActiveNavbarItem(name);
  };

  return (
    <Disclosure as="nav" className="bg-teal-900 min-w-[250px] dark:bg-greyDark">
      {({ open }) => (
        <>
          <div className="max-w-7xl flex justify-between px-6 sm:px-6 lg:px-8">
            <div className="font-pacifico text-white flex items-center mr-auto">
              <p className="text-2xl tracking-wide text-white">Buchi</p>
            </div>
            <div className="flex items-center">
              {isLoaded && <ToggleDarkModeToggle />}
            </div>
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center">
                <div className="hidden sm:block sm:ml-6">
                  <div className="flex space-x-4 items-center">
                    <NavItemList
                      handleActiveNavbarItem={handleActiveNavbarItem}
                      activeNavbarItem={activeNavbarItem}
                    />
                  </div>
                </div>
              </div>
              <div className="mr-1 flex sm:hidden">
                <MobileMenuButton isOpen={open} />
              </div>
            </div>
          </div>
          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 text-center">
              <NavItemList
                handleActiveNavbarItem={handleActiveNavbarItem}
                activeNavbarItem={activeNavbarItem}
                isMobile
              />
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default NavBar;
