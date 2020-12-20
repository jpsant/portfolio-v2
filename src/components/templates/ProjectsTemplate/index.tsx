import { Container } from '@material-ui/core';
import SectionTitle from '~atoms/SectionTitle';

import ProjectSectionImage from '~assets/svg/projectsSectionImg.svg';

import './styles.scss';

const ProjectsTemplate = () => {
  return (
    <section className="projectsTemplate">
      <div className="projectsTemplate__title">
        <Container maxWidth="lg">
          <SectionTitle title="Projetos" img={ProjectSectionImage} theme="dark" />
        </Container>
      </div>
      <div className="projectsTemplate__content">{/* <Container maxWidth="lg"></Container> */}</div>
    </section>
  );
};

export default ProjectsTemplate;
