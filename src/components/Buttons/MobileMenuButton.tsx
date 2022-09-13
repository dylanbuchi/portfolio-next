import { Disclosure } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline/index.js';

interface MobileMenuButtonProps {
  isOpen: boolean;
}

const MobileMenuButton = ({ isOpen }: MobileMenuButtonProps) => {
  return (
    <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md dark:text-gray dark:hover:text-whiter dark:hover:bg-gray-700  focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white text-white hover:text-orange-500">
      <span className="sr-only">Open main menu</span>
      {isOpen ? (
        <XIcon className="block h-6 w-6" aria-hidden="true" />
      ) : (
        <MenuIcon className="block h-6 w-6" aria-hidden="true" />
      )}
    </Disclosure.Button>
  );
};

export default MobileMenuButton;
