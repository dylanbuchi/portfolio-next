import { Props } from 'interfaces/props';

const AppContainer = ({ children }: Props) => {
  return (
    <div
      className={`full-height flex flex-col bg-home bg-cover text-gray_10 dark:bg-primary_10 dark:bg-home_dark dark:text-gray-300`}
    >
      {children}
    </div>
  );
};

export default AppContainer;
