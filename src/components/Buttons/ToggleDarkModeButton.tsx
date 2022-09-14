import { MoonIcon, SunIcon } from '@heroicons/react/outline/index';
import { LOCAL_STORAGE__THEME_KEY } from 'constants/local_storage';
import { useEffect, useState } from 'react';

import {
  DARK_THEME,
  LightDarkTheme,
  LIGHT_THEME,
} from '../../constants/dark_mode';

import setClassNames from '../../utilities/functions';

const ToggleDarkModeToggle = () => {
  const [theme, setTheme] = useState<LightDarkTheme>(() => {
    const isSystemInDarkMode = matchMedia(
      '(prefers-color-scheme: dark)',
    ).matches;

    const item = localStorage.getItem(LOCAL_STORAGE__THEME_KEY);

    if (item === null) {
      return isSystemInDarkMode ? DARK_THEME : LIGHT_THEME;
    }

    return item as LightDarkTheme;
  });

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE__THEME_KEY, theme);

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
          ? 'bg-grey border-greyDark dark:focus:ring-whiter'
          : 'bg-teal-700 border-teal-900 focus:ring-whiter',
      )} relative inline-flex flex-shrink-0 h-7 w-[3.5rem] border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-1 mr-4 sm:mr-0 focus:ring-greyDark`}
      role="switch"
      aria-checked="false"
    >
      <span className="sr-only">Toggle Dark Mode</span>
      <span
        aria-hidden="true"
        className={`${setClassNames(
          theme === DARK_THEME
            ? 'translate-x-[1.8rem] bg-greyDarker text-white p-[0.3rem]'
            : 'translate-x-[0rem] bg-white p-1 text-greyDarker',
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
