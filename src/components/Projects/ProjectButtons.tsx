import { ProjectProps } from 'interfaces/projects';
import Link from 'next/link';

const ProjectButtons = ({ project }: ProjectProps) => {
  const renderButtons = () => {
    if (project.demoLink) {
      return (
        <>
          <div className="mt-2 w-[50%] p-6">
            <Link href={project.demoLink}>
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="hover:lumos relative flex items-center justify-center rounded-2xl border border-transparent bg-blue-700 py-2 px-8 text-sm font-medium text-white_gray  transition dark:bg-accent_primary "
              >
                Demo<span className="sr-only">, {project.demoLink}</span>
              </a>
            </Link>
          </div>
          <div className="mt-auto w-[50%] p-6 transition">
            <Link href={project.codeLink ?? '#'}>
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="hover:lumos relative flex items-center justify-center rounded-2xl border border-transparent  bg-blue-400 py-2 px-8 text-sm font-medium transition dark:bg-blue-900   dark:text-white_gray"
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
        <div className="my-2 mx-auto w-[50%] p-4">
          <Link href={project.codeLink ?? '#'}>
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="hover:lumos relative flex items-center justify-center rounded-2xl   border border-transparent bg-blue-400 py-2 px-8 text-sm font-medium dark:bg-blue-900  dark:text-white_gray"
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
