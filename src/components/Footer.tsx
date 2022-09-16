import { useRouter } from 'next/router';

function Footer() {
  const router = useRouter();

  const itsNot404Page = router.pathname !== '/404';
  return (
    (itsNot404Page && (
      <footer className="min-h-auto w-full bg-primary_30 p-5 dark:bg-[#1a202d] ">
        <div className="min-w[375px] flex max-w-[1945px] justify-center">
          <p className="text-center text-[0.7rem] text-gray-300 ">
            &copy; 2019 - 2022 <span className="ml-2">Dylan Buchi</span>
          </p>
        </div>
      </footer>
    )) || <></>
  );
}

export default Footer;
