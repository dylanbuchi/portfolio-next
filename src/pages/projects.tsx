import type { GetStaticPropsResult, NextPage } from 'next';
import { memo, useCallback, useState } from 'react';

import MyHead from 'components/MyHead';
import ProjectList from 'components/Projects/ProjectList';
import { ProjectType } from 'interfaces/projects';
import FilterByTech from 'components/Projects/FilterByTech';

interface ProjectsPageProps {
  GIFS: string[];
  projectData: ProjectType[];
}
const ProjectsPage: NextPage<ProjectsPageProps> = ({ projectData, GIFS }) => {
  const imageSrc =
    'https://raw.githubusercontent.com/dylanbuchi/portfolio-next/main/public/assets/images/pages/projects/projects-page.jpg?token=GHSAT0AAAAAABLHAUH3FWJ2EW4WYWAO2XOIYZVVJ4Q';
  const itemToSetGif = '31-days-of-code';

  const setUpProjects = useCallback(() => {
    const index = Math.floor(Math.random() * GIFS.length);
    const gif = GIFS[index];

    return projectData.map((item) => {
      if (itemToSetGif === item.projectGithubName) {
        return { ...item, imgSrc: gif };
      }

      return item;
    });
  }, [GIFS, projectData]);

  const [projects, setProjects] = useState(() => setUpProjects());

  const filterProjectsBy = (tech: string) => {
    if (tech === 'All') {
      setProjects(setUpProjects());
      return;
    }
    setProjects(() =>
      projectData.filter((item) => {
        for (const obj of item.techs) {
          if (obj.name === tech) return obj;
        }
      }),
    );
  };

  return (
    <>
      <MyHead title="Projects" imageSrc={imageSrc} />

      <div className="h-screen mt-6 sm:mt-0 to-add-blur custom-scrollbar -mb-6 overflow-y-auto">
        <FilterByTech filterFunction={filterProjectsBy} />
        <ProjectList projects={projects} />
      </div>
    </>
  );
};

export async function getStaticProps(): Promise<
  GetStaticPropsResult<ProjectsPageProps>
> {
  const projectData = (await import('constants/projects/projects'))
    ?.PROJECTS_LIST;
  const GIFS = (await import('constants/images/python-31-days-code')).GIFS;
  return {
    props: {
      GIFS,
      projectData,
    },
  };
}

export default memo(ProjectsPage);
