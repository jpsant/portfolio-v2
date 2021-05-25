// import ProjectsDivider from '~dividers/ProjectsDivider';
import { useTranslation } from 'react-i18next';
import Carousel from 'react-material-ui-carousel';
import Container from '@material-ui/core/Container';

import ProjectCards from '~molecules/ProjectCards';

// eslint-disable-next-line css-modules/no-unused-class
import styles from './styles.module.scss';
import Img1 from '~assets/png/project-image-1.png';
import Img2 from '~assets/png/project-image-2.png';
import Img3 from '~assets/png/project-image-3.png';

const ProjectsSection = () => {
  const { t } = useTranslation('ProjectsSection');

  const projectList = [
    {
      projectTitle: t('P1Title'),
      projectDescription: t('P1Description'),
      projectImage: Img1
    },
    {
      projectTitle: t('P2Title'),
      projectDescription: t('P2Description'),
      projectImage: Img2
    },
    {
      projectTitle: t('P1Title'),
      projectDescription: t('P1Description'),
      projectImage: Img3
    }
  ];

  return (
    <section className={styles.projectsSection}>
      <Container maxWidth="lg">
        <div className={styles.projectsSection__container}>
          <div className={styles.projectsSection__container__title}>
            <h1>{t('title')}</h1>
          </div>
          <div className={styles.projectsSection__container__projects}>
            {projectList.map((project, index) => (
              <ProjectCards key={index} {...project} />
            ))}
          </div>
          <div className={styles.projectsSection__container__carousel}>
            <Carousel animation="slide" autoPlay={false} navButtonsAlwaysVisible={false} fullHeightHover={false}>
              {projectList.map((project, index) => (
                <ProjectCards key={index} {...project} />
              ))}
            </Carousel>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ProjectsSection;
