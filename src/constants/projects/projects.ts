import type { ProjectType } from 'interfaces/projects';
import { capitalize } from 'utilities/functions';
import { v4 as uuidv4 } from 'uuid';
import { SOCIAL_LINKS, USERNAME } from '../socials';

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

const TECH_NAMES = {
  python: 'Python',
  django: 'Django',
  css: 'Css',
  javaScript: 'JavaScript',
  react: 'React',
  materialUI: 'Material UI',
  flutter: 'Flutter',
  dart: 'Dart',
  java: 'Java',
};

const PROJECT_IMAGE_SRC_BASE_URL =
  'https://user-images.githubusercontent.com/52018183';

const PROJECTS: { [name: string]: ProjectType } = {
  [PROJECT_NAMES.bigMovies]: {
    name: PROJECT_NAMES.bigMovies,
    techs: [TECH_NAMES.react, TECH_NAMES.javaScript, TECH_NAMES.materialUI],
    imgSrc: `${PROJECT_IMAGE_SRC_BASE_URL}/176925671-87c2daa4-115f-4440-acc7-218e2146701d.png`,
    demoLink: 'https://big-movies.netlify.app/',
  },

  [PROJECT_NAMES.francisPortfolio]: {
    name: PROJECT_NAMES.francisPortfolio,
    alternativeName: "Francis's Portfolio",
    techs: [TECH_NAMES.python],
    imgSrc: `${PROJECT_IMAGE_SRC_BASE_URL}/97243778-d42b1c00-17d5-11eb-82b3-431cece272e1.png`,
    demoLink: 'https://fbrempong.pythonanywhere.com',
  },

  [PROJECT_NAMES.findCustomers]: {
    name: PROJECT_NAMES.findCustomers,
    techs: [TECH_NAMES.django, TECH_NAMES.python, TECH_NAMES.css],
    imgSrc: `${PROJECT_IMAGE_SRC_BASE_URL}/107127881-ef5afc80-6897-11eb-8ff6-0bc4377c2bd5.gif`,
    demoLink: 'https://find-customers.herokuapp.com/',
  },

  [PROJECT_NAMES.python31days]: {
    name: PROJECT_NAMES.python31days,
    techs: [TECH_NAMES.python],
    imgSrc: `${PROJECT_IMAGE_SRC_BASE_URL}/105533202-8afe4180-5cca-11eb-8754-e77d37dd618b.gif`,
  },

  [PROJECT_NAMES.discordBot]: {
    name: PROJECT_NAMES.discordBot,
    techs: [TECH_NAMES.python],
    imgSrc: `${PROJECT_IMAGE_SRC_BASE_URL}/96628718-fe1da380-12e8-11eb-8787-4c7ff537a310.png`,
  },

  [PROJECT_NAMES.expenses]: {
    name: PROJECT_NAMES.expenses,
    techs: [TECH_NAMES.flutter, TECH_NAMES.dart],
    imgSrc: `${PROJECT_IMAGE_SRC_BASE_URL}/62386638-d947df80-b52e-11e9-9745-a5de55649ebb.gif`,
  },

  [PROJECT_NAMES.movies]: {
    name: PROJECT_NAMES.movies,
    techs: [TECH_NAMES.flutter, TECH_NAMES.dart],
    imgSrc: `${PROJECT_IMAGE_SRC_BASE_URL}/63264632-f20c0100-c261-11e9-8ff4-6ee8599ac964.png`,
  },

  [PROJECT_NAMES.hangman]: {
    name: PROJECT_NAMES.hangman,
    techs: [TECH_NAMES.java],
    imgSrc: `${PROJECT_IMAGE_SRC_BASE_URL}/71909796-7a2a6e80-314f-11ea-8797-1fa7a6614545.png`,
  },
};

export const PROJECTS_LIST: ProjectType[] = [];

Object.values(PROJECTS).forEach(({ name, ...item }) => {
  const project: ProjectType = {
    id: uuidv4(),
    name: item.alternativeName ? item.alternativeName : getProjectName(name),
    codeLink: getProjectLink(name),
    demoLink: item.demoLink,
    imgSrc: item.imgSrc,
    imgAlt: `${getProjectLink(name)} Project`,
    techs: item.techs,
    projectGithubName: name,
  };

  PROJECTS_LIST.push(project);
});
