import { MoonIcon, SunIcon } from '@heroicons/react/outline/index';
import { useState } from 'react';
import setClassNames from '../../../utilities/functions';

interface ToggleDarkModeToggleProps {
  activated?: boolean;
}
export default function ToggleDarkModeToggle({
  activated = false,
}: ToggleDarkModeToggleProps) {
  const [isEnabled, setIsEnabled] = useState(activated);

  return (
    <button
      onClick={() => setIsEnabled((prev) => !prev)}
      type="button"
      className={`${setClassNames(
        isEnabled
          ? 'bg-white border-gray-dark'
          : 'bg-grayDarker  border-gray-dark',
      )} relative inline-flex flex-shrink-0 h-7 w-[3.53rem] border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-1 mr-4 sm:mr-0 focus:ring-grayDark`}
      role="switch"
      aria-checked="false"
    >
      <span className="sr-only">Toggle Dark Mode</span>
      <span
        aria-hidden="true"
        className={`${setClassNames(
          isEnabled
            ? 'translate-x-[1.8rem] bg-grayDarker text-white p-[0.3rem]'
            : 'translate-x-[0rem] bg-white p-1 text-grayDarker',
        )} pointer-events-none inline-block rounded-full transform transition ease-in-out duration-20 h-[1.5rem] w-[1.5rem]`}
      >
        {isEnabled ? (
          <MoonIcon
            style={{
              marginLeft: '0.1rem',
            }}
          />
        ) : (
          <SunIcon />
        )}
      </span>
    </button>
  );
}
