import { useEffect, useState } from 'react';
import { copyTextToClipboard } from 'utilities/functions';

interface TextWithCopyBtnProps {
  text: string;
}

const TextWithCopyBtn = ({ text }: TextWithCopyBtnProps) => {
  const [timeOutId, seTimeOutId] = useState<NodeJS.Timeout | null>(null);
  const [copyButtonDisabled, setCopyButtonDisabled] = useState(true);

  const durationCopyBtnDisplayed = 5000;

  useEffect(() => {
    return () => {
      if (timeOutId) clearTimeout(timeOutId);
    };
  }, [timeOutId]);

  const handleOnTouchEnd = () => {
    const copyButtonTimeOut = setTimeout(() => {
      setCopyButtonDisabled(true);
    }, durationCopyBtnDisplayed);
    seTimeOutId(copyButtonTimeOut);
  };

  const handleOnMouseLeave = () => {
    handleOnTouchEnd();
  };

  return (
    <>
      <span
        onTouchStart={() => setCopyButtonDisabled(false)}
        onTouchEnd={handleOnTouchEnd}
        onMouseEnter={() => setCopyButtonDisabled(false)}
        onMouseLeave={handleOnMouseLeave}
        className="ml-3"
      >
        {text}
      </span>
      <button
        onClick={() => {
          copyTextToClipboard(text);
          setCopyButtonDisabled(true);
        }}
        className={`hover:lumos ml-1 scale-[.85] rounded-full bg-blue-800 py-1 px-3 text-xs font-medium text-white_gray shadow-sm shadow-gray-600 dark:bg-accent_primary dark:shadow-black ${
          copyButtonDisabled ? 'hidden' : 'block'
        }`}
      >
        Copy
      </button>
    </>
  );
};

export default TextWithCopyBtn;
