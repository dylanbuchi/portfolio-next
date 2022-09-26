import { Dispatch, SetStateAction } from 'react';
import { CheckCircleIcon, XIcon } from '@heroicons/react/solid';

import { Props } from 'interfaces/props';

interface SuccessAlertProps extends Props {
  message: string;
  onClick: Dispatch<SetStateAction<boolean>>;
}

const SuccessAlert = ({ message, onClick }: SuccessAlertProps) => {
  const handleAlertOnClick = () => {
    onClick(false);
  };

  return (
    <div className="rounded-md bg-green-50 p-4 dark:bg-teal-900">
      <div className="flex">
        <div className="flex-shrink-0">
          <CheckCircleIcon
            className="h-5 w-5 text-green-400 dark:text-teal-100"
            aria-hidden="true"
          />
        </div>
        <div className="ml-3">
          <p className="text-sm font-medium text-green-800 dark:text-white_gray">
            {message}
          </p>
        </div>
        <div className="ml-auto pl-3">
          <div className="-mx-1.5 -my-1.5">
            <button
              type="button"
              className="inline-flex rounded-md bg-green-50 p-1.5 text-green-500 hover:bg-green-100 focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2 focus:ring-offset-green-50 dark:bg-teal-700  dark:text-white_gray dark:hover:bg-teal-600 dark:focus:ring-teal-600 dark:focus:ring-offset-teal-900"
              onClick={handleAlertOnClick}
            >
              <span className="sr-only">Dismiss</span>
              <XIcon className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessAlert;
