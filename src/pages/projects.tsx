import type { NextPage } from 'next';
import { useEffect, useState } from 'react';

import { GIFS } from 'constants/images/python-31-days-code';
import { PROJECTS_LIST } from 'constants/projects/projects';

import MyHead from 'components/MyHead';
import ProjectList from 'components/Projects/ProjectList';

const ProjectsPage: NextPage = () => {
  const itemToSetGif = '31-days-of-code';

  const [projects, setProjects] = useState(() => PROJECTS_LIST);

  useEffect(() => {
    const index = Math.floor(Math.random() * GIFS.length);
    const gif = GIFS[index];

    setProjects((prev) =>
      prev.map((item) => {
        if (itemToSetGif === item.projectGithubName) {
          return { ...item, imgSrc: gif };
        }
        return item;
      }),
    );
  }, []);

  return (
    <>
      <MyHead title="Projects" />
      <div className="to-add-blur h-full overflow-y-auto">
        <ProjectList projects={projects} />
      </div>
    </>
  );
};

export default ProjectsPage;
