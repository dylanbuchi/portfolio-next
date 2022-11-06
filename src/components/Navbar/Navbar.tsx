import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { Disclosure } from '@headlessui/react';

import MobileMenuButton from 'components/Buttons/MobileMenuButton';
import ToggleDarkModeToggle from 'components/Buttons/ToggleDarkModeButton';
import NavItemList from './NavItemList';

const NavBar = () => {
  const router = useRouter();

  const [activeNavbarItem, setActiveNavbarItem] = useState<string>('');
  const [previousActiveItem, setPreviousActiveItem] = useState<string>('');

  useEffect(() => {
    if (activeNavbarItem !== router.asPath) setActiveNavbarItem(router.asPath);
    setPreviousActiveItem(activeNavbarItem);
  }, [
    activeNavbarItem,
    setActiveNavbarItem,
    router.asPath,
    setPreviousActiveItem,
  ]);

  return (
    <Disclosure
      as="nav"
      className=" bg-primary_40 p-3 text-white_gray dark:bg-primary_20"
    >
      {({ open }) => (
        <>
          <div className="flex justify-between px-2 sm:px-6 lg:px-8">
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
                    <NavItemList activeNavbarItem={activeNavbarItem} />
                  </div>
                </div>
              </div>
              <div className={'ml-3 sm:hidden'}>
                <MobileMenuButton isOpen={open} />
              </div>
            </div>
          </div>
          <Disclosure.Panel className="sm:hidden">
            {({ close }) => (
              <div className="space-y-1 px-2 pt-2 pb-3 text-center">
                <NavItemList
                  previousActiveItem={previousActiveItem}
                  activeNavbarItem={activeNavbarItem}
                  isMobile
                  closePanel={close}
                />
              </div>
            )}
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default NavBar;
