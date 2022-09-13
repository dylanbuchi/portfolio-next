import type { NextPage } from 'next';
import Home from '../components/Home';
import NavBar from '../components/Navbar/Navbar';

const ProjectsPage: NextPage = () => (
  <>
    <NavBar activeItem="Projects" />
    <Home />
  </>
);

export default ProjectsPage;
