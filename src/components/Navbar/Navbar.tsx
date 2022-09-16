import { Disclosure } from '@headlessui/react';
import { useRouter } from 'next/router';
import { useState } from 'react';

import MobileMenuButton from '../Buttons/MobileMenuButton';
import ToggleDarkModeToggle from '../Buttons/ToggleDarkModeButton';
import NavItemList from './NavItemList';

const NavBar = () => {
  const router = useRouter();

  const [activeNavbarItem, setActiveNavbarItem] = useState(() => {
    return router.asPath;
  });

  const handleActiveNavbarItem = (route: string) => {
    setActiveNavbarItem(route);
  };

  const itsNot404Page = router.pathname !== '/404';

  return (
    (itsNot404Page && (
      <Disclosure
        as="nav"
        className="h-auto min-w-[250px] bg-primary_40 p-3 text-white_gray dark:bg-primary_20"
      >
        {({ open }) => (
          <>
            <div className="flex max-w-7xl justify-between px-2 sm:px-6 lg:px-8">
              <div className="mr-auto flex items-center font-pacifico">
                <p className="text-2xl tracking-wide ">Buchi</p>
              </div>
              <div className="flex items-center">
                <ToggleDarkModeToggle />
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="hidden sm:ml-6 sm:block">
                    <div className="flex items-center space-x-4">
                      <NavItemList
                        handleActiveNavbarItem={handleActiveNavbarItem}
                        activeNavbarItem={activeNavbarItem}
                      />
                    </div>
                  </div>
                </div>
                <div className="ml-3 flex sm:hidden">
                  <MobileMenuButton isOpen={open} />
                </div>
              </div>
            </div>
            <Disclosure.Panel className="sm:hidden">
              <div className="space-y-1 px-2 pt-2 pb-3 text-center">
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
