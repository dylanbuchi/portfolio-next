import ProjectButton from 'components/Buttons/ProjectButton';
import { ProjectProps } from 'interfaces/projects';

const ProjectButtons = ({ project }: ProjectProps) => {
  const GitHubButton = () => {
    return (
      <ProjectButton
        name="GitHub"
        url={project.codeLink || '#'}
        classes={githubButtonClasses}
      />
    );
  };

  const LiveDemoButton = () => {
    return (
      <ProjectButton
        name="Live Demo"
        url={project.demoLink || '#'}
        classes={demoLinkButtonClasses}
      />
    );
  };

  const demoLinkButtonClasses =
    'bg-blue-700 py-2 px-4 text-sm font-medium text-white_gray transition dark:bg-accent_primary';

  const githubButtonClasses =
    'bg-blue-400 py-2 px-4 text-sm font-medium transition dark:bg-blue-900 dark:text-white_gray';

  return (
    <>
      {(project.demoLink && (
        <>
          <LiveDemoButton />
          <GitHubButton />
        </>
      )) || <GitHubButton />}
    </>
  );
};

export default ProjectButtons;
