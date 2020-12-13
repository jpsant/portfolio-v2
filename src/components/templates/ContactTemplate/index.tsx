import { Container } from '@material-ui/core';
import WhiteDivider from '~assets/svg/whiteDivider.svg';
import './styles.scss';

const ContactTemplate = () => {
  return (
    <section className="contactTemplate">
      <img className="contactTemplate-divider" src={WhiteDivider} alt="ContactSection White Divider" />
      <Container maxWidth="lg">
        <h1>Contact template</h1>
      </Container>
    </section>
  );
};

export default ContactTemplate;
