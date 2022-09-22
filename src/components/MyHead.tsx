import Head from 'next/head';

interface MyHeadProps {
  title: string;
  description?: string;
  imageSrc?: string;
}

const DEFAULT_IMG_SRC =
  'https://user-images.githubusercontent.com/52018183/97459431-89ff8300-191a-11eb-93c2-36a04db97006.png';

const MyHead = ({
  title,
  description,
  imageSrc = DEFAULT_IMG_SRC,
}: MyHeadProps) => {
  return (
    <Head>
      <meta name="title" property="og:title" content={title} />
      <meta
        name="description"
        property="og:description"
        content={description}
      />
      <meta property="og:image" content={imageSrc} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <title>{title}</title>
    </Head>
  );
};

export default MyHead;
