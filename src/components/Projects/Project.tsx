import { PROJECT_NAMES } from 'constants/projects/projects';
import { ProjectProps } from 'interfaces/projects';
import Image from 'next/image';
import ProjectButtons from './ProjectButtons';

const Project = ({ project }: ProjectProps) => {
  return (
    <li className="relative mt-5 h-fit rounded-2xl bg-primary_90 shadow-sm shadow-primary_10 transition hover:scale-105 dark:bg-primary_20 dark:text-gray-300 dark:shadow-none lg:m-0 lg:scale-[0.75] lg:hover:scale-[0.8]">
      <div className="relative h-72 w-full overflow-hidden rounded-2xl rounded-b-none">
        <Image
          src={project.imgSrc}
          alt={project.imgAlt}
          layout="fill"
          className={`${
            [
              PROJECT_NAMES.findCustomers,
              PROJECT_NAMES.discordBot,
              PROJECT_NAMES.hangman,
            ].includes(project.projectGithubName ?? '')
              ? 'object-left'
              : ''
          } ${
            PROJECT_NAMES.expenses === project.projectGithubName
              ? 'object-top'
              : ''
          }`}
        />
      </div>
      <div className="relative -mt-0 bg-white_gray p-5 dark:bg-primary_30">
        <p className="mt-1 text-xs">{project.techs.join(' | ')}</p>
        <h3 className="text-md font-bold dark:text-white_gray">
          {project.name}
        </h3>
      </div>
      <div className="absolute inset-x-0 top-0 flex h-72 items-end justify-end overflow-hidden p-4">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-black opacity-50 dark:from-slate-800"
        />
      </div>
      <div className="flex">
        <ProjectButtons project={project} />
      </div>
    </li>
  );
};

export default Project;
