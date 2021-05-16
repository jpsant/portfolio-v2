// import ProjectsDivider from '~dividers/ProjectsDivider';
import Container from '@material-ui/core/Container';

import ProjectCards from '~molecules/ProjectCards';
import styles from './styles.module.scss';

const ProjectsSection = () => {
  return (
    <section className={styles.projectsSection}>
      <Container maxWidth="lg">
        <div></div>
        <ProjectCards />
      </Container>
    </section>
  );
};

export default ProjectsSection;
