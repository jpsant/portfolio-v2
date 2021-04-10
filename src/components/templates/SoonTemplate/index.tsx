/* eslint-disable css-modules/no-unused-class */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useTranslation } from 'react-i18next';
import { CSSTransition, SwitchTransition } from 'react-transition-group';
import Container from '@material-ui/core/Container';

import LoadingSpinner from '~atoms/LoadingSpinner';
import browser from '~assets/3D-assets/dark-3d-browser.png';
import phone from '~assets/3D-assets/dark-3d-phone.png';
import styles from './styles.module.scss';

const SoonTemplate = () => {
  const { t, ready } = useTranslation('SoonTemplate');

  return (
    <section className={styles.soonTemplate}>
      {console.log(ready)}
      <SwitchTransition>
        <CSSTransition key={ready ? 0 : 1} timeout={1100} classNames="translate">
          <Container maxWidth="lg">
            {ready ? (
              <div className={styles.soonTemplate__container}>
                <div className={styles.soonTemplate__container__texts}>
                  <h1>{t('UserName')}</h1>
                  <h2>{t('UserJob')}</h2>
                  <img className={styles.soonTemplate__container__texts_phone} src={phone} alt="3D phone" />
                  <span>
                    <h4>{t('UserSoon')}</h4>
                  </span>
                </div>
                <div className={styles.soonTemplate__container__images}>
                  <img className={styles.soonTemplate__container__images_browser} src={browser} alt="3D browser" />
                </div>
              </div>
            ) : (
              <LoadingSpinner loading={ready} />
            )}
          </Container>
        </CSSTransition>
      </SwitchTransition>
    </section>
  );
};

export default SoonTemplate;
