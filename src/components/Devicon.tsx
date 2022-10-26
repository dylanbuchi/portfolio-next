import Image from 'next/image';

type DeviconType = 'original' | 'plain' | 'line';

interface DeviconProps {
  name: string;
  type?: DeviconType;
  darkMode?: boolean;
  className?: string;
}

export const Devicon = ({
  name,
  type = 'original',
  className = '',
}: DeviconProps) => {
  const filterName = name.toLowerCase().trim();

  return (
    <Image
      fill
      className={className}
      alt={name}
      src={`/assets/images/icons/${filterName}/${filterName}-${type}.svg`}
      style={{
        maxWidth: '100%',
      }}
    ></Image>
  );
};
