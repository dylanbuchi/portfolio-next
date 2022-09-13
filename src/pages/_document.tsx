import { Head, Html, Main, NextScript } from 'next/document';

const Document = () => {
  return (
    <Html lang="en-us" className="h-full">
      <Head />
      <body className="bg-white h-full dark:bg-greyDarker dark:text-white text-gray_10">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};
export default Document;
