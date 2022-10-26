import Image from "next/legacy/image";

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
      className={className}
      alt={name}
      layout={'fill'}
      src={`/assets/images/icons/${filterName}/${filterName}-${type}.svg`}
    ></Image>
  );
};
