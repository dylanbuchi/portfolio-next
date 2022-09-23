import { PROJECT_NAMES } from 'constants/projects/projects';
import { ProjectProps } from 'interfaces/projects';
import Image from 'next/image';
import { Fragment } from 'react';
import ProjectButtons from './ProjectButtons';

const Project = ({ project }: ProjectProps) => {
  const renderIcons = () => {
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
          iconStyles.push('h-[1.05rem] w-[1.05rem]');
          break;

        case checkItem(['django', 'java'], techNameLower):
          iconStyles.push('rounded-sm bg-transparent dark:bg-white_gray');
          break;
      }

      return (
        <Fragment key={id}>
          {name}
          <span
            className={`relative ml-[0.25rem] mr-2 inline-flex h-3.5 w-3.5 ${iconStyles.join(
              ' ',
            )}`}
          >
            <Image layout="fill" src={icon} alt={name} />
          </span>
        </Fragment>
      );
    });
  };

  return (
    <li className="relative mt-5 h-fit rounded-2xl bg-primary_80 shadow-sm shadow-primary_10 transition hover:scale-105 dark:bg-primary_20 dark:text-gray-300 dark:shadow-none lg:m-0 lg:w-[105%] lg:scale-[0.75] lg:hover:scale-[0.8] landscape_max:m-0 landscape_max:mt-14 landscape_max:scale-[0.95] hover:landscape_max:scale-[1] landscape_max_height_sm:mt-[0rem] landscape_max_height_sm:scale-[0.8] hover:landscape_max_height_sm:scale-[0.85]">
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
              : [PROJECT_NAMES.expenses, PROJECT_NAMES.movies].includes(
                  project.projectGithubName ?? '',
                )
              ? 'object-top'
              : ''
          }`}
        />
      </div>
      <div className="relative -mt-0 bg-primary_90 p-5 pr-0 pt-2 dark:bg-primary_30">
        <div className="flex items-center text-sm font-medium text-gray-800 dark:text-gray-300">
          {renderIcons()}
        </div>

        <h3 className="mt-2 text-lg font-bold tracking-wide dark:text-white_gray">
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
