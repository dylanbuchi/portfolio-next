import Image from "next/image";

import { TECHS } from 'constants/projects/projects';
import { ProjectIcons } from 'interfaces/projects';

const SkillsCard = () => {
  const renderIcon = (tech: ProjectIcons) => {
    const techNameLower = tech.name.toLowerCase();
    const iconStyles: string[] = [];

    const checkItem = (list: string[], target: string) =>
      list.find((item) => item === target);

    switch (techNameLower) {
      case checkItem(['nodejs', 'react'], techNameLower):
        iconStyles.push('rounded-3xl bg-slate-700 dark:bg-transparent');
        break;

      case checkItem(['python', 'sass'], techNameLower):
        iconStyles.push('h-[1.2em] w-[1.2em]');
        break;

      case 'javascript':
        iconStyles.push('ml-[0.3em]');
        break;

      case checkItem(
        ['django', 'java', 'flask', 'bash', 'github', 'sqlite', 'mysql'],
        techNameLower,
      ):
        iconStyles.push(
          'rounded-sm bg-transparent dark:bg-gray-200 ml-[0.32em]',
        );
        break;

      case 'redux':
        iconStyles.push('rounded-3xl bg-transparent dark:bg-gray-200');
        break;

      case 'nextjs':
        iconStyles.push('rounded-3xl bg-transparent dark:bg-gray-200');
        break;
    }
    return (
      <div className="inline-flex items-center dark:text-gray-300">
        {tech.name}
        <span
          className={`relative ml-[0.15rem] mr-3 h-4 w-4 ${iconStyles.join(
            ' ',
          )} ${
            techNameLower === 'mongodb' || techNameLower === 'firebase'
              ? ' -ml-[0.15em] h-[1.24em] w-[1.24em]'
              : ''
          } `}
        >
          <Image src={tech.icon} alt={tech.name} fill sizes="100vw" />
        </span>
      </div>
    );
  };

  return (
    <div className="mt-10 rounded-xl  bg-white_gray p-6 text-lg shadow-sm shadow-gray-600 dark:bg-primary_20  dark:text-white_gray dark:shadow-black sm:m-10 sm:mt-10 sm:mb-0">
      <h1 className="text-2xl font-bold">Skills</h1>
      <dl>
        <dt className="text-md mt-3 font-semibold">Frontend:</dt>
        <dd className="-mt-1 ml-8 flex-wrap text-base  font-medium">
          <span>{renderIcon(TECHS.nextjs)}</span>
          <span>{renderIcon(TECHS.react)}</span>
          <span>{renderIcon(TECHS.typeScript)}</span>
          <span>{renderIcon(TECHS.javaScript)}</span>
          <span>{renderIcon(TECHS.tailwind)}</span>
          <span>{renderIcon(TECHS.sass)}</span>
          <span>{renderIcon(TECHS.css)}</span>
          <span>{renderIcon(TECHS.html)}</span>
        </dd>
        <dt className="text-md mt-3 font-semibold">Backend:</dt>
        <dd className="-mt-1 ml-8 flex-wrap text-base  font-medium">
          <span>{renderIcon(TECHS.python)}</span>
          <span>{renderIcon(TECHS.java)}</span>
          <span>{renderIcon(TECHS.bash)}</span>
          <span>{renderIcon(TECHS.nodejs)}</span>
          <span>{renderIcon(TECHS.django)}</span>
          <span>{renderIcon(TECHS.flask)}</span>
        </dd>
        <dt className="text-md mt-3 font-semibold">Mobile:</dt>
        <dd className="-mt-1 ml-8 flex-wrap text-base  font-medium">
          <span className="">{renderIcon(TECHS.flutter)}</span>
          <span className="">{renderIcon(TECHS.dart)}</span>
        </dd>
        <dt className="text-md mt-3 font-semibold">Databases:</dt>
        <dd className="-mt-1 ml-8 flex-wrap text-base  font-medium">
          <span className="">{renderIcon(TECHS.mongodb)}</span>
          <span className="">{renderIcon(TECHS.sqlite)}</span>
          <span className="">{renderIcon(TECHS.firebase)}</span>
          <span className="">{renderIcon(TECHS.mysql)}</span>
        </dd>

        <dt className="text-md mt-3 font-semibold">Version Control:</dt>
        <dd className="-mt-1 ml-8 flex-wrap text-base  font-medium">
          <span className="">{renderIcon(TECHS.git)}</span>
        </dd>
      </dl>
    </div>
  );
};

export default SkillsCard;
