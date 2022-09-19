import MyHead from 'components/MyHead';
import type { NextPage } from 'next';

const ProjectsPage: NextPage = () => (
  <>
    <MyHead title="Projects" />
    <div className="overflow-y-scroll"></div>
  </>
);

export default ProjectsPage;
