import { useTranslation } from 'react-i18next';

// eslint-disable-next-line css-modules/no-unused-class
import styles from './styles.module.scss';

type Props = {
  projectTitle: string;
  projectDescription: string;
  projectImage: string;
};

const ProjectsCards = ({ projectTitle, projectDescription, projectImage }: Props) => {
  const { t } = useTranslation('ProjectsSection');

  return (
    <div className={styles.projectCard} role="project-card">
      <div className={styles.projectCard__projectInformations}>
        <h1>{projectTitle}</h1>
        <h3>{projectDescription}</h3>
        <div className={styles.projectCard__projectInformations__buttonsContainer}>
          <a href="">{t('projectButton')}</a>
          <hr />
          <a href="">{t('roadmapButton')}</a>
        </div>
      </div>
      <div className={styles.projectCard__projectImage} style={{ backgroundImage: `url(${projectImage})` }}></div>
    </div>
  );
};

export default ProjectsCards;
