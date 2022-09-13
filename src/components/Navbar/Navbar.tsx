import { Disclosure } from '@headlessui/react';
import { useRouter } from 'next/router';

import { useState } from 'react';
import useIsComponentLoaded from '../../utilities/hooks/useIsComponentLoaded';

import MobileMenuButton from '../Buttons/MobileMenuButton';
import ToggleDarkModeToggle from '../Buttons/ToggleDarkModeButton';
import NavItemList from './NavItemList';

const NavBar = () => {
  const [activeNavbarItem, setActiveNavbarItem] = useState('/');
  const isLoaded = useIsComponentLoaded();
  const router = useRouter();

  const handleActiveNavbarItem = (route: string) => {
    setActiveNavbarItem(route);
  };

  const itsNot404Page = router.pathname !== '/404';

  return (
    (itsNot404Page && (
      <Disclosure
        as="nav"
        className="bg-teal-900 min-w-[250px] dark:bg-greyDark"
      >
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
    )) || <></>
  );
};

export default NavBar;
