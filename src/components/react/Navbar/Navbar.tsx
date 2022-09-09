import { Disclosure } from '@headlessui/react';
import { useState } from 'react';

import MobileMenuButton from '../MobileMenuButton';
import NavItemList from './NavItemList';

export default function NavBar() {
  const [activeNavbarItem, setActiveNavbarItem] = useState('Home');

  const handleActiveNavbarItem = (name: string) => {
    setActiveNavbarItem(name);
  };

  const display = () => {};

  return (
    <Disclosure as="nav" className="bg-gray-800">
      {({ open }) => (
        <>
          <div className="max-w-7xl flex justify-between px-6 sm:px-6 lg:px-8">
            <div className="font-pacifico text-white flex items-center">
              <p className="text-2xl tracking-wide">Buchi</p>
            </div>
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center">
                <div className="hidden sm:block sm:ml-6">
                  <div className="flex space-x-4">
                    <NavItemList
                      handleActiveNavbarItem={handleActiveNavbarItem}
                      activeNavbarItem={activeNavbarItem}
                    />
                  </div>
                </div>
              </div>
              <div className="-mr-2 flex sm:hidden">
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
}
