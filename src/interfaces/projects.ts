export interface ProjectLinks {
  codeLink?: string;
  demoLink?: string;
}

export interface ProjectType extends ProjectLinks {
  id?: string;
  name: string;
  alternativeName?: string;
  imgSrc: string;
  imgAlt?: string;
  techs: string[];
  projectGithubName?: string;
}

export interface ProjectProps {
  project: ProjectType;
}
