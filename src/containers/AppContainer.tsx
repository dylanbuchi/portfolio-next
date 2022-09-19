import { Props } from 'interfaces/props';

const AppContainer = ({ children }: Props) => {
  return (
    <div
      className={`full-height dark:text-white_gray" flex flex-col overflow-hidden bg-home bg-cover text-gray_10 dark:bg-primary_10 dark:bg-home_dark`}
    >
      {children}
    </div>
  );
};

export default AppContainer;
