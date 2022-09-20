import { ProjectProps } from 'interfaces/projects';
import Link from 'next/link';

const ProjectButtons = ({ project }: ProjectProps) => {
  const renderButtons = () => {
    if (project.demoLink) {
      return (
        <>
          <div className="w-[50%] p-2 ">
            <Link href={project.demoLink}>
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="hover:lumos relative flex items-center justify-center rounded-2xl border border-transparent bg-blue-700 py-2 px-8 text-sm font-medium text-white_gray  transition dark:bg-accent_10 dark:text-gray-900"
              >
                Demo<span className="sr-only">, {project.demoLink}</span>
              </a>
            </Link>
          </div>
          <div className="w-[50%] p-2 transition">
            <Link href={project.codeLink ?? ''}>
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="hover:lumos x relative flex items-center justify-center rounded-2xl border border-transparent  bg-blue-400 py-2 px-8 text-sm font-medium text-gray-900 transition  dark:bg-slate-200"
              >
                Code<span className="sr-only">, {project.codeLink}</span>
              </a>
            </Link>
          </div>
        </>
      );
    }
    return (
      <>
        <div className="w-[100%] p-2">
          <Link href={project.codeLink ?? ''}>
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="hover:lumos relative flex items-center justify-center rounded-2xl   border border-transparent bg-blue-400 py-2 px-8 text-sm font-medium  text-gray-900 dark:bg-slate-200"
            >
              Code<span className="sr-only">, {project.codeLink}</span>
            </a>
          </Link>
        </div>
      </>
    );
  };

  return renderButtons();
};

export default ProjectButtons;
