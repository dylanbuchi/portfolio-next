import Link from 'next/link';

const PageNotFound404 = () => {
  const pageNotFoundStr = 'Page not found ';
  const number404Str = '404';

  const backHomeStr = 'Go back Home';
  const tryAgainMessage =
    'Please check the URL in the address bar and try again.';

  return (
    <div className="h-full bg-page404 bg-cover bg-center bg-no-repeat px-4 py-16 text-gray_90 sm:px-6 sm:py-24 md:grid md:place-items-center lg:px-8">
      <div className="mx-auto">
        <main className="flex flex-col items-center justify-center sm:flex-row">
          <div className="flex flex-col items-center justify-center sm:ml-6">
            <p className="mb-4 text-4xl font-extrabold sm:hidden">
              {number404Str}
            </p>

            <div className="sm:pl-6 md:rounded md:bg-primary_10 md:bg-opacity-70 md:p-10">
              <h1 className="text-center text-4xl font-extrabold tracking-tight sm:text-left sm:text-5xl">
                <span className="hidden sm:mr-5 sm:inline">
                  {number404Str} |
                </span>
                {pageNotFoundStr}
              </h1>
              <div className="rounded bg-primary_10 bg-opacity-70 text-center md:bg-opacity-0">
                <p className="mt-4 p-4 text-base">{tryAgainMessage}</p>
              </div>
            </div>
            <div className="mt-6">
              <Link
                href="/"
                className="rounded-m inline-flex items-center rounded border border-transparent bg-primary_10 bg-opacity-90 px-4 py-2 text-sm font-medium hover:bg-opacity-100 hover:text-white">

                {backHomeStr}

              </Link>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default PageNotFound404;
