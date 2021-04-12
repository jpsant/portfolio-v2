/* eslint-disable css-modules/no-unused-class */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { CSSTransition, SwitchTransition } from 'react-transition-group';
import Container from '@material-ui/core/Container';

import { ThemeContext } from '~contexts/themeContext';
import LoadingSpinner from '~atoms/LoadingSpinner';
import ThemeSwitcher from '~molecules/ThemeSwitcher';
import darkBrowser from '~assets/3D-assets/dark-3d-browser.png';
import darkPhone from '~assets/3D-assets/dark-3d-phone.png';
import lightBrowser from '~assets/3D-assets/light-3d-browser.png';
import lightPhone from '~assets/3D-assets/light-3d-phone.png';
import styles from './styles.module.scss';

const SoonTemplate = () => {
  const { t, ready } = useTranslation('SoonTemplate');
  const { theme } = useContext(ThemeContext);

  return (
    <section className={styles.soonTemplate}>
      <SwitchTransition>
        <CSSTransition key={ready ? 0 : 1} timeout={1100} classNames="translate">
          <Container maxWidth="lg">
            {ready ? (
              <div className={styles.soonTemplate__container}>
                <div className={styles.soonTemplate__container__themeSwitcher}>
                  <ThemeSwitcher />
                </div>
                <div className={styles.soonTemplate__container__texts}>
                  <h1>{t('UserName')}</h1>
                  <h2>{t('UserJob')}</h2>
                  <SwitchTransition>
                    <CSSTransition key={theme === 'dark' ? 0 : 1} timeout={400} classNames="fade">
                      {theme === 'dark' ? (
                        <img className={styles.soonTemplate__container__texts_phone} src={darkPhone} alt="3D phone" />
                      ) : (
                        <img className={styles.soonTemplate__container__texts_phone} src={lightPhone} alt="3D phone" />
                      )}
                    </CSSTransition>
                  </SwitchTransition>
                  <span>
                    <h4>{t('UserSoon')}</h4>
                  </span>
                </div>
                <div className={styles.soonTemplate__container__images}>
                  <SwitchTransition>
                    <CSSTransition key={theme === 'dark' ? 0 : 1} timeout={400} classNames="fade">
                      {theme === 'dark' ? (
                        <div>
                          <img
                            className={styles.soonTemplate__container__images_browser}
                            src={darkBrowser}
                            alt="3D browser"
                          />
                        </div>
                      ) : (
                        <div>
                          <img
                            className={styles.soonTemplate__container__images_browser}
                            src={lightBrowser}
                            alt="3D browser"
                          />
                        </div>
                      )}
                    </CSSTransition>
                  </SwitchTransition>
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
