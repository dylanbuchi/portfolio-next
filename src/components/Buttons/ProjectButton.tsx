import Link from 'next/link';
import { FaExternalLinkAlt } from 'react-icons/fa';

interface ProjectButtonProps {
  name: string;
  url: string;
  classes?: string;
}

const ProjectButton = ({ name, url, classes }: ProjectButtonProps) => {
  return (
    <Link
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={`hover:lumos relative flex items-center justify-center rounded-2xl border border-transparent shadow-sm shadow-gray-800 dark:shadow-black ${classes}`}
    >
      <div className="flex items-center">
        <p className="font-semibold">{name}</p>
        <FaExternalLinkAlt className="ml-[0.45em] h-[0.9em] w-[0.9em]" />
      </div>
      <span className="sr-only">, {name}</span>
    </Link>
  );
};

export default ProjectButton;
