import { useTranslation } from 'react-i18next';

// eslint-disable-next-line css-modules/no-unused-class
import styles from './styles.module.scss';

// type Props = {
//   projectTitle: string;
//   projectDescription: string;
//   projectImage: string;
// };

const ProjectsCards = () => {
  const { t } = useTranslation('ProjectSkills');

  return (
    <div className={styles.projectCard}>
      <div className={styles.projectCard__projectInformations}>
        <h1>Lorem ipsum dolor sit amet.</h1>
        <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.</h3>
        <div className={styles.projectCard__projectInformations__buttonsContainer}>
          <a href="">{t('projectButton')}</a>
          <a href="">{t('roadmapButton')}</a>
        </div>
      </div>
      <div className={styles.projectCard__projectImage}>
        <img src="" alt="" />
      </div>
    </div>
  );
};

export default ProjectsCards;
