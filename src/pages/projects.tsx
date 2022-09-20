import MyHead from 'components/MyHead';
import ProjectList from 'components/Projects/ProjectList';
import type { NextPage } from 'next';
import { PROJECTS_LIST } from '../constants/projects/projects';

const ProjectsPage: NextPage = () => (
  <>
    <MyHead title="Projects" />
    <div className="to-add-blur h-full overflow-y-auto">
      <ProjectList projects={PROJECTS_LIST} />
    </div>
  </>
);

export default ProjectsPage;
