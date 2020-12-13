import { Container } from '@material-ui/core';
import BlackDivider from '~assets/svg/blackDivider.svg';
import WhiteDivider from '~assets/svg/whiteDivider.svg';
import './styles.scss';

const AboutTemplate = () => {
  return (
    <>
      <section className="aboutTemplate">
        <img className="aboutTemplate-divider" src={BlackDivider} alt="AboutSection Black Divider" />
        <Container maxWidth="lg">
          <h1>About template</h1>
        </Container>
      </section>
      <section className="aboutTemplateRoad">
        <img className="aboutTemplateRoad-divider" src={WhiteDivider} alt="aboutTemplateRoad White Divider" />
        <Container maxWidth="lg">
          <h1>About template</h1>
        </Container>
      </section>
    </>
  );
};

export default AboutTemplate;
