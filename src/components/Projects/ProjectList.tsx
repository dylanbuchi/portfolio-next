import type { ProjectType } from 'interfaces/projects';
import Project from './Project';

interface ProjectListProps {
  projects: ProjectType[];
}

const ProjectList = ({ projects }: ProjectListProps) => {
  return (
    <div className="mx-10 mb-10 py-10 lg:m-0 lg:p-0 landscape_max:p-0">
      <ul className="grid grid-cols-1 gap-16 sm:grid-cols-2 sm:gap-x-6 lg:m-0 lg:grid-cols-4 lg:gap-0 xl:gap-x-8">
        {projects.map((item) => (
          <Project key={item.id} project={item} />
        ))}
      </ul>
    </div>
  );
};

export default ProjectList;
