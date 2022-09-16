import { Disclosure } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline/index.js';

interface MobileMenuButtonProps {
  isOpen: boolean;
}

const MobileMenuButton = ({ isOpen }: MobileMenuButtonProps) => {
  const blurElements = document.getElementsByClassName('to-add-blur');
  const BLUR_CLASS_NAME = 'blur';

  const processElementsTo = (option: 'add' | 'remove', className: string) => {
    if (!className) return;

    Array.prototype.forEach.call(blurElements, (element: Element) => {
      option === 'add'
        ? element?.classList?.add(className)
        : element?.classList?.remove(className);
    });
  };

  const open = () => {
    processElementsTo('add', BLUR_CLASS_NAME);
    return <XIcon className="block h-6 w-6" aria-hidden="true" />;
  };

  const close = () => {
    processElementsTo('remove', BLUR_CLASS_NAME);
    return <MenuIcon className="block h-6 w-6" aria-hidden="true" />;
  };

  return (
    <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-white hover:text-orange-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white dark:text-gray_90 dark:hover:bg-primary_30 dark:hover:text-white">
      <span className="sr-only">Open main menu</span>
      {isOpen ? open() : close()}
    </Disclosure.Button>
  );
};

export default MobileMenuButton;
