import type { NextPage } from 'next';
import { memo, useCallback, useEffect, useState } from 'react';

import { GIFS } from 'constants/images/python-31-days-code';
import { PROJECTS_LIST } from 'constants/projects/projects';

import MyHead from 'components/MyHead';
import ProjectList from 'components/Projects/ProjectList';
import { ProjectType } from 'interfaces/projects';

const ProjectsPage: NextPage = () => {
  const imageSrc =
    'https://raw.githubusercontent.com/dylanbuchi/portfolio-next/main/public/assets/images/pages/projects/projects-page.jpg?token=GHSAT0AAAAAABLHAUH3FWJ2EW4WYWAO2XOIYZVVJ4Q';
  const itemToSetGif = '31-days-of-code';

  const [projects, setProjects] = useState<ProjectType[]>([]);

  const setUpProjects = useCallback(() => {
    const index = Math.floor(Math.random() * GIFS.length);
    const gif = GIFS[index];
    setProjects(() =>
      PROJECTS_LIST.map((item) => {
        if (itemToSetGif === item.projectGithubName) {
          return { ...item, imgSrc: gif };
        }
        return item;
      }),
    );
  }, []);

  useEffect(() => {
    setUpProjects();
  }, [setUpProjects]);

  return (
    <>
      <MyHead title="Projects" imageSrc={imageSrc} />
      <div className="to-add-blur custom-scrollbar -mb-6 overflow-y-auto">
        <ProjectList projects={projects} />
      </div>
    </>
  );
};

export default memo(ProjectsPage);
