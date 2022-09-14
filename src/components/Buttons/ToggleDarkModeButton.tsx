import { MoonIcon, SunIcon } from '@heroicons/react/outline/index';
import { useEffect } from 'react';

import useStorage from 'utilities/hooks/useStorage';

import {
  DARK_THEME,
  LightDarkTheme,
  LIGHT_THEME,
} from '../../constants/dark_mode';

import setClassNames from '../../utilities/functions';

const ToggleDarkModeToggle = () => {
  const isSystemInDarkMode = matchMedia('(prefers-color-scheme: dark)').matches;

  const [theme, setTheme] = useStorage<LightDarkTheme>(
    'local_storage',
    LIGHT_THEME,
    isSystemInDarkMode ? DARK_THEME : LIGHT_THEME,
  );

  useEffect(() => {
    [DARK_THEME, LIGHT_THEME].forEach((item) =>
      document.documentElement.classList.remove(item),
    );

    document.documentElement.classList.add(theme);
  }, [theme]);

  return (
    <button
      onClick={(event) => {
        event.preventDefault();
        setTheme((prev) => (prev === LIGHT_THEME ? DARK_THEME : LIGHT_THEME));
      }}
      type="button"
      className={`${setClassNames(
        theme === DARK_THEME
          ? 'bg-primary_90 border-primary_10 dark:focus:ring-white_gray'
          : 'bg-primary_90 border-primary_30 focus:ring-primary_10',
      )} relative inline-flex flex-shrink-0 h-7 w-[3.5rem] border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-1 mr-4 sm:mr-0 focus:ring-primary_10`}
      role="switch"
      aria-checked="false"
    >
      <span className="sr-only">Toggle Dark Mode</span>
      <span
        aria-hidden="true"
        className={`${setClassNames(
          theme === DARK_THEME
            ? 'translate-x-[1.8rem] bg-primary_10 text-white_gray p-[0.3rem]'
            : 'translate-x-[0rem] bg-white_gray p-1 text-black',
        )} pointer-events-none inline-block rounded-full transform transition ease-in-out duration-20 h-[1.5rem] w-[1.5rem]`}
      >
        {theme === DARK_THEME ? (
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
};

export default ToggleDarkModeToggle;
