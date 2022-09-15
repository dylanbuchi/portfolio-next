import { useRouter } from 'next/router';

function Footer() {
  const router = useRouter();

  const itsNot404Page = router.pathname !== '/404';
  return (
    (itsNot404Page && (
      <footer className="h-fit w-full bg-primary_30 p-2 dark:bg-[#1a202d] ">
        <div className="min-w[375px] flex max-w-[1945px] items-end justify-center">
          <p className="p-3 text-center text-xs text-gray-300 ">
            &copy; 2019 - 2022 <span className="ml-2">Dylan Buchi</span>
          </p>
        </div>
      </footer>
    )) || <></>
  );
}

export default Footer;
