import { Container } from '@material-ui/core';

import SectionTitle from '~atoms/SectionTitle';

import AboutSectionImage1 from '~assets/svg/aboutSectionImg-1.svg';
import AboutSectionImage2 from '~assets/svg/aboutSectionImg-2.svg';
import BlackDivider from '~assets/svg/blackDivider.svg';
import WhiteDivider from '~assets/svg/whiteDivider.svg';
import './styles.scss';

const AboutTemplate = () => {
  return (
    <>
      <section className="aboutTemplate">
        <div className="aboutTemplate__title">
          <Container maxWidth="lg">
            <SectionTitle title="Quem sou eu?" img={AboutSectionImage1} theme="light" />
          </Container>
        </div>
        <div className="aboutTemplate__content">
          <Container maxWidth="lg">
            <h1>content</h1>
          </Container>
        </div>
        <img className="aboutTemplate-divider" src={BlackDivider} alt="AboutSection Black Divider" />
      </section>
      <section className="aboutTemplateRoad">
        <div className="aboutTemplateRoad__title">
          <Container maxWidth="lg">
            <SectionTitle title="O caminho até agora" img={AboutSectionImage2} theme="dark" />
          </Container>
        </div>
        <div className="aboutTemplateRoad__content">
          <Container maxWidth="lg">
            <h1>content</h1>
          </Container>
        </div>
        <img className="aboutTemplateRoad-divider" src={WhiteDivider} alt="aboutTemplateRoad White Divider" />
      </section>
    </>
  );
};

export default AboutTemplate;
