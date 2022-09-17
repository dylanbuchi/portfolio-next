import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

function Footer() {
  const [currentYear, setCurrentYear] = useState<string>();
  const router = useRouter();

  useEffect(() => {
    setCurrentYear(new Date().getFullYear().toString());
  }, []);

  const itsNot404Page = router.pathname !== '/404';
  return (
    (itsNot404Page && (
      <footer className="to-add-blur min-h-auto w-full bg-primary_30 p-5 dark:bg-[#1a202d] ">
        <div className="min-w[375px] flex max-w-[1945px] justify-center">
          <p className="text-center text-[0.7rem] text-gray-300 ">
            &copy; 2019 - {currentYear}
            <span className="ml-2">Dylan Buchi</span>
          </p>
        </div>
      </footer>
    )) || <></>
  );
}

export default Footer;
