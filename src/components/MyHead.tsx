import Head from 'next/head';

interface MyHeadProps {
  title?: string;
  description?: string;
  imageSrc?: string;
  url?: string;
}

const IMG_SRC_DEFAULT =
  'https://raw.githubusercontent.com/dylanbuchi/portfolio-next/main/public/assets/images/pages/home/home-page.jpg?token=GHSAT0AAAAAABLHAUH2IZPW4OMLFJZBGKOEYZVVDRQ';

const URL_DEFAULT = 'https://dylanbuchi.com';

const TITLE_DEFAULT = 'Dylan Buchi: Portfolio';
const DESCRIPTION_DEFAULT = 'The personal portfolio of Dylan Buchi';

const MyHead = ({
  title = TITLE_DEFAULT,
  description = DESCRIPTION_DEFAULT,
  imageSrc = IMG_SRC_DEFAULT,
  url = URL_DEFAULT,
}: MyHeadProps) => {
  return (
    <Head>
      <meta http-equiv="X-UA-Compatible" content="ie=edge" />
      <meta http-equiv="Content-Type" content="text/html;charset=UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="author" content="Dylan Buchi" />
      <meta name="title" content={title} />
      <meta name="description" content={description} />

      {/* OG */}
      <meta name="title" property="og:title" content={title} />
      <meta
        name="description"
        property="og:description"
        content={description}
      />
      <meta property="og:image" content={imageSrc} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />

      {/* <!-- Facebook Meta Tags --> */}
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />

      {/* <!-- Twitter Meta Tags --> */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageSrc} />

      <title>{title}</title>
    </Head>
  );
};

export default MyHead;
