import { PROJECT_NAMES } from 'constants/projects/projects';
import { ProjectProps } from 'interfaces/projects';

import Image from 'next/image';
import ProjectButtons from './ProjectButtons';

const Project = ({ project }: ProjectProps) => {
  const renderTechIcons = () => {
    return project.techs.map(({ name, icon, id }) => {
      const techNameLower = name.toLowerCase();
      const iconStyles: string[] = [];

      const checkItem = (list: string[], target: string) =>
        list.find((item) => item === target);

      switch (techNameLower) {
        case 'react':
          iconStyles.push('rounded-3xl bg-slate-700 dark:bg-transparent');
          break;

        case 'python':
          iconStyles.push('h-[1.35em] w-[1.35em]');
          break;

        case 'javascript':
          iconStyles.push('ml-[0.3em]');
          break;

        case 'mongodb':
          iconStyles.push('h-[1.3rem] w-[1.3rem] -ml-[0.1em]');
          break;

        case checkItem(['django', 'java', 'flask'], techNameLower):
          iconStyles.push(
            'rounded-sm bg-transparent dark:bg-gray-200 ml-[0.32em]',
          );
          break;

        case 'redux':
          iconStyles.push('rounded-3xl bg-transparent dark:bg-gray-200');
          break;
        case 'firebase':
          iconStyles.push('h-[1.4em] w-[1.4em], ml-[0.1em]');
          break;
      }

      return (
        <div className="inline-flex items-center dark:text-gray-200" key={id}>
          {name}
          <span
            className={`relative ml-[0.15rem] mr-4 h-3.5 w-3.5 ${iconStyles.join(
              ' ',
            )}`}
          >
            <Image src={icon} alt={name} fill sizes="100vw" />
          </span>
        </div>
      );
    });
  };

  return (
    <li className="relative mt-5 flex h-full  flex-col items-stretch rounded-2xl bg-primary_80 shadow-sm shadow-gray-600 transition hover:scale-105 dark:bg-primary_20 dark:text-gray-300 dark:shadow-black lg:-mt-[1rem] lg:w-[115%] lg:scale-[0.75] lg:p-0 lg:hover:scale-[0.77] landscape_max:m-0 landscape_max:mt-14 landscape_max:scale-[0.95] hover:landscape_max:scale-[1] landscape_max_height_sm:mt-[0rem] landscape_max_height_sm:scale-[0.8] hover:landscape_max_height_sm:scale-[0.85]">
      <div className="relative h-56 overflow-hidden rounded-2xl rounded-b-none">
        <Image
          src={project.imgSrc}
          alt={project.imgAlt ?? 'project'}
          className={`${
            [
              PROJECT_NAMES.findCustomers,
              PROJECT_NAMES.discordBot,
              PROJECT_NAMES.hangman,
            ].includes(project.projectGithubName ?? '')
              ? 'object-left'
              : [PROJECT_NAMES.expenses, PROJECT_NAMES.movies].includes(
                  project.projectGithubName ?? '',
                )
              ? 'object-top'
              : ''
          }`}
          fill
          sizes="100vw"
        />
      </div>
      <div className="relative mb-0 bg-primary_90 p-5 pr-0 pt-2 dark:bg-primary_30">
        <div
          className={`${
            project.techs.length > 2 ? 'justify-center' : 'start'
          } dark:text-gray-300" flex flex-wrap gap-y-1 text-sm font-semibold text-gray-800`}
        >
          {renderTechIcons()}
        </div>

        <h3 className="mt-2.5 text-lg font-bold tracking-wide dark:text-white_gray">
          {project.name}
        </h3>
        <p className={'text-md mt-1 pr-8'}> {project.description}</p>
        <div className="absolute inset-x-0 -top-14 right-0 h-14 bg-gradient-to-t from-slate-900 opacity-50"></div>
      </div>

      <div className="flex justify-evenly items-center h-[25%]">
        <ProjectButtons project={project} />
      </div>
    </li>
  );
};

export default Project;
