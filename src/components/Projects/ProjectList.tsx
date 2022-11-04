import type { ProjectType } from 'interfaces/projects';
import { memo } from 'react';
import Project from './Project';

interface ProjectListProps {
  projects: ProjectType[];
}

const ProjectList = ({ projects }: ProjectListProps) => {
  return (
    <div className="mx-5 mb-10 py-8 lg:m-0 lg:p-0 landscape_max:p-0">
      <ul className="xl:col-5 align grid grid-cols-1 gap-16 sm:grid-cols-2 sm:gap-x-6 md:pb-20 lg:-mt-7 lg:grid-cols-4 lg:grid-rows-[440px_440px_1fr] lg:place-items-end lg:justify-items-center lg:gap-0  lg:pb-0 xl:gap-x-8 landscape_max:gap-0 landscape_max:p-0">
        {projects.map((item) => (
          <Project key={item.id} project={item} />
        ))}
      </ul>
    </div>
  );
};

export default memo(ProjectList);
