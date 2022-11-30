export interface ProjectLinks {
  codeLink?: string;
  demoLink?: string | null;
}

export interface ProjectIcons {
  id?: string;
  name: string;
  icon: string;
}

export interface ProjectType extends ProjectLinks {
  id?: string;
  name: string;
  alternativeName?: string;
  imgSrc: string;
  imgAlt?: string;
  techs: ProjectIcons[];
  projectGithubName?: string;
  description?: string;
}

export interface ProjectProps {
  project: ProjectType;
}

export type ProjectTechs = {
  python: ProjectIcons;
  django: ProjectIcons;
  css: ProjectIcons;
  javaScript: ProjectIcons;
  typeScript: ProjectIcons;
  react: ProjectIcons;
  flutter: ProjectIcons;
  dart: ProjectIcons;
  java: ProjectIcons;
  mongodb: ProjectIcons;
  sqlite: ProjectIcons;
  html: ProjectIcons;
  flask: ProjectIcons;
  materialUi: ProjectIcons;
  redux: ProjectIcons;
  git: ProjectIcons;
  github: ProjectIcons;
  bash: ProjectIcons;
  nodejs: ProjectIcons;
  bootstrap: ProjectIcons;
  sass: ProjectIcons;
  nextjs: ProjectIcons;
  tailwind: ProjectIcons;
  firebase: ProjectIcons;
  mysql: ProjectIcons;
};
