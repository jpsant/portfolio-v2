import { Container } from '@material-ui/core';
import SectionTitle from '~atoms/SectionTitle';

import FutureSectionImage from '~assets/svg/futureSectionImg.svg';

import './styles.scss';

const FutureTemplate = () => {
  return (
    <section className="futureTemplate">
      <div className="futureTemplate__title">
        <Container maxWidth="lg">
          <SectionTitle title="Futuro" img={FutureSectionImage} theme="dark" />
        </Container>
      </div>
      <div className="futureTemplate__content">{/* <Container maxWidth="lg"></Container> */}</div>
    </section>
  );
};

export default FutureTemplate;
