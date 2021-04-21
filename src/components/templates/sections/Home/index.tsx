import { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { CSSTransition, SwitchTransition } from 'react-transition-group';
import Container from '@material-ui/core/Container';

import { ThemeContext } from '~contexts/themeContext';
import ThemeSwitcher from '~molecules/ThemeSwitcher';
import LanguageSwitcher from '~molecules/LanguageSwitcher';
import darkBrowser from '~assets/3D-assets/dark-3d-browser.png';
import darkPhone from '~assets/3D-assets/dark-3d-phone.png';
import lightBrowser from '~assets/3D-assets/light-3d-browser.png';
import lightPhone from '~assets/3D-assets/light-3d-phone.png';

// eslint-disable-next-line css-modules/no-unused-class
import styles from './styles.module.scss';

const HomeSection = () => {
  const { t } = useTranslation('HomeSection');
  const { theme } = useContext(ThemeContext);

  return (
    <section className={styles.homeSection}>
      <Container maxWidth="lg">
        <div className={styles.homeSection__container}>
          <div className={styles.homeSection__container__themeSwitcher}>
            <ThemeSwitcher />
          </div>
          <div className={styles.homeSection__container__languageSwitcher}>
            <LanguageSwitcher />
          </div>
          <div className={styles.homeSection__container__texts}>
            <h1>{t('title')}</h1>
            <SwitchTransition>
              <CSSTransition key={theme === 'dark' ? 0 : 1} timeout={400} classNames="fade">
                {theme === 'dark' ? (
                  <img className={styles.homeSection__container__texts_phone} src={darkPhone} alt="3D dark phone" />
                ) : (
                  <img className={styles.homeSection__container__texts_phone} src={lightPhone} alt="3D light phone" />
                )}
              </CSSTransition>
            </SwitchTransition>
            <h2>{t('description')}</h2>
            <button>{t('callToAction')}</button>
          </div>
          <div className={styles.homeSection__container__images}>
            <SwitchTransition>
              <CSSTransition key={theme === 'dark' ? 0 : 1} timeout={400} classNames="fade">
                {theme === 'dark' ? (
                  <div>
                    <img
                      className={styles.homeSection__container__images_browser}
                      src={darkBrowser}
                      alt="3D dark browser"
                    />
                  </div>
                ) : (
                  <div>
                    <img
                      className={styles.homeSection__container__images_browser}
                      src={lightBrowser}
                      alt="3D light browser"
                    />
                  </div>
                )}
              </CSSTransition>
            </SwitchTransition>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default HomeSection;
