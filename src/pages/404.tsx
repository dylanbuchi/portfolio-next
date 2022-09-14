import Link from 'next/link';

const PageNotFound404 = () => {
  const pageNotFoundStr = 'Page not found ';
  const number404Str = '404';

  const backHomeStr = 'Go back Home';
  const tryAgainMessage =
    'Please check the URL in the address bar and try again.';

  return (
    <div className="bg-page404 h-screen bg-cover bg-no-repeat bg-center min-h-full px-4 py-16 sm:px-6 sm:py-24 md:grid md:place-items-center lg:px-8 text-gray_90">
      <div className="max-w-max mx-auto">
        <main className="flex flex-col sm:flex-row justify-center items-center">
          <div className="sm:ml-6 flex flex-col justify-center items-center">
            <p className="text-4xl font-extrabold sm:hidden mb-4">
              {number404Str}
            </p>

            <div className="md:bg-primary_10 md:bg-opacity-70 sm:pl-6 md:p-10 md:rounded">
              <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl text-center sm:text-left">
                <span className="hidden sm:inline sm:mr-5">
                  {number404Str} |
                </span>
                {pageNotFoundStr}
              </h1>
              <div className="bg-primary_10 bg-opacity-70 rounded md:bg-opacity-0 text-center">
                <p className="mt-4 text-base p-4">{tryAgainMessage}</p>
              </div>
            </div>
            <div className="mt-6">
              <Link href="/">
                <a className="rounded inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-m bg-primary_10 bg-opacity-90 hover:bg-opacity-100 hover:text-white">
                  {backHomeStr}
                </a>
              </Link>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default PageNotFound404;
