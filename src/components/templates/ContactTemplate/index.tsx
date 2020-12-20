import { Container } from '@material-ui/core';
import SectionTitle from '~atoms/SectionTitle';

import WhiteDivider from '~assets/svg/whiteDivider.svg';

import ContactSectionImage1 from '~assets/svg/contactSectionImg.svg';
import './styles.scss';

const ContactTemplate = () => {
  return (
    <section className="contactTemplate">
      <div className="contactTemplate__title">
        <Container maxWidth="lg">
          <SectionTitle title="Contato" img={ContactSectionImage1} theme="dark" />
        </Container>
      </div>
      <div className="contactTemplate__content">
        <Container maxWidth="lg">
          <h1>content</h1>
        </Container>
      </div>
      <img className="contactTemplate-divider" src={WhiteDivider} alt="ContactSection White Divider" />
    </section>
  );
};

export default ContactTemplate;
