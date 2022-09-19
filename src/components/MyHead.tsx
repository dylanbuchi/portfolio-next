import Head from 'next/head';

interface MyHeadProps {
  title: string;
  description?: string;
}

const MyHead = ({ title, description }: MyHeadProps) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="title" property="og:title" content={title} />
      <meta
        name="description"
        property="og:description"
        content={description}
      />
    </Head>
  );
};

export default MyHead;
