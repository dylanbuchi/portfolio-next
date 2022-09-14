import { Head, Html, Main, NextScript } from 'next/document';

const Document = () => {
  return (
    <Html lang="en-us" className="">
      <Head />
      <body className="bg-home bg-cover dark:bg-home_dark dark:text-white_gray dark:bg-primary_10 text-gray_10">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};
export default Document;
