import { Container } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import './styles.scss';

import Moon from '~assets/svg/moon.svg';
import RocketAnimation from '~atoms/animations/Rocket';
import Planet1 from '~assets/svg/planet1.svg';
import Planet2 from '~assets/svg/planet2.svg';

const SoonTemplate = () => {
  const { t } = useTranslation('Home');

  return (
    <section className="soonTemplate">
      <img className="soonTemplate-moon" src={Moon} alt="Moon image" />
      <img className="soonTemplate-planet1" src={Planet1} alt="Planet 1" />
      <img className="soonTemplate-planet2" src={Planet2} alt="Planet 2" />
      <Container maxWidth="lg">
        <div className="soonTemplate__container">
          <div className="soonTemplate__container-rocket">
            <RocketAnimation />
          </div>
          <h1 className="soonTemplate__container-h1">{t('UserName')}</h1>
          <h3 className="soonTemplate__container-h3">{t('UserJob')}</h3>
          <h4 className="soonTemplate__container-h4">{t('UserSoon')}</h4>
        </div>
      </Container>
    </section>
  );
};

export default SoonTemplate;
