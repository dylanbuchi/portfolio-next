import { v4 as uuidv4 } from 'uuid';

import type { ProjectTechs, ProjectType } from 'interfaces/projects';
import { capitalize } from 'utilities/functions';

import { SOCIAL_LINKS, USERNAME } from 'constants/socials';
import { icons } from 'constants/images/icons';

const getProjectName = (projectName: string) => {
  return capitalize(projectName.split('-').join(' '));
};

const getProjectLink = (projectName: string) => {
  return `${SOCIAL_LINKS.github.website}/${USERNAME}/${projectName}`;
};

export const PROJECT_NAMES = {
  bigMovies: 'big-movies',
  francisPortfolio: 'francis-portfolio',
  findCustomers: 'find-customers',
  python31days: '31-days-of-code',
  discordBot: 'discord-bot',
  expenses: 'expenses',
  movies: 'movies',
  hangman: 'hangman',
};

export const TECHS: ProjectTechs = {
  python: { name: 'Python', icon: icons.python, id: uuidv4() },
  django: { name: 'Django', icon: icons.django, id: uuidv4() },
  css: { name: 'Css', icon: icons.css, id: uuidv4() },
  javaScript: { name: 'JavaScript', icon: icons.javaScript, id: uuidv4() },
  typeScript: { name: 'TypeScript', icon: icons.typeScript, id: uuidv4() },
  react: { name: 'React', icon: icons.react, id: uuidv4() },
  flutter: { name: 'Flutter', icon: icons.flutter, id: uuidv4() },
  dart: { name: 'Dart', icon: icons.dart, id: uuidv4() },
  java: { name: 'Java', icon: icons.java, id: uuidv4() },
  mongodb: { name: 'MongoDB', icon: icons.mongodb, id: uuidv4() },
  sqlite: { name: 'Sqlite', icon: icons.sqlite, id: uuidv4() },
  html: { name: 'Html', icon: icons.html, id: uuidv4() },
  flask: { name: 'Flask', icon: icons.flask, id: uuidv4() },
  redux: { name: 'Redux', icon: icons.redux, id: uuidv4() },
  materialUi: { name: 'Material UI', icon: icons.materialUi, id: uuidv4() },
  git: { name: 'Git', icon: icons.git, id: uuidv4() },
  github: { name: 'Github', icon: icons.github, id: uuidv4() },
  bash: { name: 'Bash', icon: icons.bash, id: uuidv4() },
  nodejs: { name: 'NodeJs', icon: icons.nodejs, id: uuidv4() },
  bootstrap: { name: 'Bootstrap', icon: icons.bootstrap, id: uuidv4() },
  nextjs: { name: 'NextJs', icon: icons.nextjs, id: uuidv4() },
  sass: { name: 'Sass', icon: icons.sass, id: uuidv4() },
  tailwind: { name: 'Tailwind Css', icon: icons.tailwind, id: uuidv4() },
  firebase: { name: 'Firebase', icon: icons.firebase, id: uuidv4() },
  mysql: { name: 'MySql', icon: icons.mysql, id: uuidv4() },
} as const;

export const PROJECT_IMAGE_SRC_BASE_URL =
  'https://user-images.githubusercontent.com/52018183';

const PROJECTS: { [name: string]: ProjectType } = {
  [PROJECT_NAMES.python31days]: {
    name: PROJECT_NAMES.python31days,
    techs: [TECHS.python],
    imgSrc: `${PROJECT_IMAGE_SRC_BASE_URL}/105533202-8afe4180-5cca-11eb-8754-e77d37dd618b.gif`,
    description: 'Personal challenge: build 31 Python projects in one month.',
  },

  [PROJECT_NAMES.bigMovies]: {
    name: PROJECT_NAMES.bigMovies,
    techs: [
      TECHS.react,
      TECHS.typeScript,
      TECHS.redux,
      TECHS.materialUi,
      TECHS.html,
    ],
    imgSrc: `${PROJECT_IMAGE_SRC_BASE_URL}/176925671-87c2daa4-115f-4440-acc7-218e2146701d.png`,
    demoLink: 'https://big-movies.netlify.app/',
    description:
      'Search, watch trailers and login to access your watchlist and favorites.',
  },

  [PROJECT_NAMES.discordBot]: {
    name: PROJECT_NAMES.discordBot,
    techs: [TECHS.python, TECHS.mongodb],
    imgSrc: `${PROJECT_IMAGE_SRC_BASE_URL}/96628718-fe1da380-12e8-11eb-8787-4c7ff537a310.png`,
    description: 'Freelance job: build a custom discord bot.',
  },

  [PROJECT_NAMES.francisPortfolio]: {
    name: PROJECT_NAMES.francisPortfolio,
    alternativeName: "Francis's Portfolio",
    techs: [TECHS.flask, TECHS.python, TECHS.javaScript, TECHS.css, TECHS.html],
    imgSrc: `${PROJECT_IMAGE_SRC_BASE_URL}/97243778-d42b1c00-17d5-11eb-82b3-431cece272e1.png`,
    demoLink: 'https://fbrempong.pythonanywhere.com',
    description: 'Freelance job: build a custom portfolio website.',
  },

  [PROJECT_NAMES.findCustomers]: {
    name: PROJECT_NAMES.findCustomers,
    techs: [TECHS.django, TECHS.python, TECHS.sqlite, TECHS.css, TECHS.html],
    imgSrc: `${PROJECT_IMAGE_SRC_BASE_URL}/107127881-ef5afc80-6897-11eb-8ff6-0bc4377c2bd5.gif`,
    demoLink: 'https://find-customers.herokuapp.com/',
    description: 'List every customer info and location or find them by id.',
  },

  [PROJECT_NAMES.expenses]: {
    name: PROJECT_NAMES.expenses,
    techs: [TECHS.flutter, TECHS.dart],
    imgSrc: `${PROJECT_IMAGE_SRC_BASE_URL}/62386638-d947df80-b52e-11e9-9745-a5de55649ebb.gif`,
    description: 'A mobile app to track expenses.',
  },

  [PROJECT_NAMES.movies]: {
    name: PROJECT_NAMES.movies,
    techs: [TECHS.flutter, TECHS.dart, TECHS.firebase],
    imgSrc: `${PROJECT_IMAGE_SRC_BASE_URL}/63264632-f20c0100-c261-11e9-8ff4-6ee8599ac964.png`,
    description:
      'A movies mobile app: Login, watch trailers and buy some awesome movies.',
  },

  [PROJECT_NAMES.hangman]: {
    name: PROJECT_NAMES.hangman,
    techs: [TECHS.java],
    imgSrc: `${PROJECT_IMAGE_SRC_BASE_URL}/71909796-7a2a6e80-314f-11ea-8797-1fa7a6614545.png`,
    description: 'Play the classic hangman game in your terminal.',
  },
};

export const PROJECTS_LIST: ProjectType[] = [];

Object.values(PROJECTS).forEach(({ name, ...item }) => {
  const project: ProjectType = {
    id: uuidv4(),
    name: item.alternativeName ? item.alternativeName : getProjectName(name),
    codeLink: getProjectLink(name),
    demoLink: item.demoLink || null,
    imgSrc: item.imgSrc,
    imgAlt: `${getProjectLink(name)} Project`,
    techs: item.techs,
    projectGithubName: name,
    description: item.description,
  };

  PROJECTS_LIST.push(project);
});
