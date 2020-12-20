import { Container } from '@material-ui/core';
import SectionTitle from '~atoms/SectionTitle';

import SkillsSectionImage from '~assets/svg/skillsSectionImg.svg';

import './styles.scss';

const SkillsTemplate = () => {
  return (
    <section className="skillsTemplate">
      <div className="skillsTemplate__title">
        <Container maxWidth="lg">
          <SectionTitle title="Habilidades" img={SkillsSectionImage} theme="dark" />
        </Container>
      </div>
      <div className="skillsTemplate__content">{/* <Container maxWidth="lg"></Container> */}</div>
    </section>
  );
};

export default SkillsTemplate;
