import { useEffect } from 'react';
import { MoonIcon, SunIcon } from '@heroicons/react/outline/index';

import { LOCAL_STORAGE__THEME_KEY } from 'constants/storage';
import { DARK_THEME, LightDarkTheme, LIGHT_THEME } from 'constants/dark_mode';

import useStorage from 'utilities/hooks/useStorage';
import setClassNames from 'utilities/functions';

const ToggleDarkModeToggle = () => {
  const isSystemInDarkMode = matchMedia('(prefers-color-scheme: dark)').matches;

  const [theme, setTheme] = useStorage<LightDarkTheme>(
    'local_storage',
    LOCAL_STORAGE__THEME_KEY,
    isSystemInDarkMode ? DARK_THEME : LIGHT_THEME,
  );

  useEffect(() => {
    [DARK_THEME, LIGHT_THEME].forEach((item) =>
      document.documentElement.classList.remove(item),
    );

    document.documentElement.classList.add(theme);
  });

  return (
    <button
      onClick={(event) => {
        event.preventDefault();
        setTheme((prev) => (prev === LIGHT_THEME ? DARK_THEME : LIGHT_THEME));
      }}
      type="button"
      className={`${setClassNames(
        theme === DARK_THEME
          ? 'border-primary_10 bg-primary_90 dark:focus:ring-white_gray'
          : 'border-primary_30 bg-primary_90 focus:ring-primary_10',
      )} relative mr-4 inline-flex h-7 w-[3.5rem] flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-1 focus:ring-primary_10 sm:mr-0`}
      role="switch"
      aria-checked="false"
    >
      <span className="sr-only">Toggle Dark Mode</span>
      <span
        aria-hidden="true"
        className={`${setClassNames(
          theme === DARK_THEME
            ? 'translate-x-[1.8rem] bg-primary_10 p-[0.3rem] text-white_gray'
            : 'translate-x-[0rem] bg-white_gray p-1 text-black',
        )} duration-20 pointer-events-none inline-block h-[1.5rem] w-[1.5rem] transform rounded-full transition ease-in-out`}
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
