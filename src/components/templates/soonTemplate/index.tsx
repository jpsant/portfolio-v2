import { Container } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import Fade from 'react-reveal/Fade';
import './styles.scss';

import RocketAnimation from '~atoms/animations/Rocket';
import Moon from '~assets/svg/moon.svg';
import Stars1 from '~assets/svg/stars1.svg';
import Stars2 from '~assets/svg/stars2.svg';
import Planet1 from '~assets/svg/planet1.svg';
import Planet2 from '~assets/svg/planet2.svg';

const SoonTemplate = () => {
  const { t } = useTranslation('Home');

  return (
    <section className="soonTemplate">
      <Fade left>
        <img className="soonTemplate-moon" src={Moon} alt="Moon" />
      </Fade>
      <Fade duration={1000} delay={800}>
        <img className="soonTemplate-stars1" src={Stars1} alt="Stars 1" />
        <img className="soonTemplate-stars2" src={Stars2} alt="Stars 2" />
        <img className="soonTemplate-stars3" src={Stars2} alt="Stars 3" />
      </Fade>
      <Fade left>
        <img className="soonTemplate-planet1" src={Planet1} alt="Planet 1" />
      </Fade>
      <Fade right>
        <img className="soonTemplate-planet2" src={Planet2} alt="Planet 2" />
      </Fade>
      <Container maxWidth="lg">
        <div className="soonTemplate__container">
          <Fade delay={700}>
            <div className="soonTemplate__container-rocket">
              <RocketAnimation />
            </div>
          </Fade>
          <Fade bottom>
            <h1 className="soonTemplate__container-h1">{t('UserName')}</h1>
            <h3 className="soonTemplate__container-h3">{t('UserJob')}</h3>
            <h4 className="soonTemplate__container-h4">{t('UserSoon')}</h4>
          </Fade>
        </div>
      </Container>
    </section>
  );
};

export default SoonTemplate;
