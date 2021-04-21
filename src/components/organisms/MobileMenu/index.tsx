/* eslint-disable css-modules/no-unused-class */
import { useState, useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { Twirl as Hamburger } from 'hamburger-react';

import styles from './styles.module.scss';
import { ThemeContext } from '~contexts/themeContext';
import LanguageSwitcher from '~molecules/LanguageSwitcher';
import ThemeSwitcher from '~molecules/ThemeSwitcher';
import LogoLight from '~assets/svg/logo-light.svg';
import LogoDark from '~assets/svg/logo-dark.svg';

const MobileMenu = () => {
  const { t } = useTranslation('MobileMenu');
  const { theme } = useContext(ThemeContext);
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <div className={styles.hamburguerMenu}>
        <Hamburger label="Hamburguer menu" size={24} toggled={isOpen} toggle={setOpen} />
      </div>
      <nav className={`${isOpen ? styles.mobileMenu_open : styles.mobileMenu_closed}`}>
        <div
          className={`${isOpen ? styles.mobileMenu_open_languageSwitcher : styles.mobileMenu_closed_languageSwitcher}`}
        >
          <LanguageSwitcher />
        </div>
        <div className={`${isOpen ? styles.mobileMenu_open_themeSwitcher : styles.mobileMenu_closed_themeSwitcher}`}>
          <ThemeSwitcher />
        </div>
        <div className={`${isOpen ? styles.mobileMenu_open__container : styles.mobileMenu_closed__container}`}>
          <div>
            <a href="#">{t('link1')}</a>
            <hr />
          </div>
          <div>
            <a href="#">{t('link2')}</a>
            <hr />
          </div>
          <div>
            <a href="#">{t('link3')}</a>
            <hr />
          </div>
          <div>
            <a href="#">{t('link4')}</a>
            <hr />
          </div>
          <div
            className={`${
              isOpen ? styles.mobileMenu_open__container__contact : styles.mobileMenu_closed__container__contact
            }`}
          >
            <a href="#">{t('link5')}</a>
          </div>
          <div className={styles.mobileMenu_open__container__disclaimer}>
            {theme === 'dark' ? <img src={LogoDark} alt="Logo Dark" /> : <img src={LogoLight} alt="Logo Light" />}
            <h6>{t('disclaimer')}</h6>
          </div>
        </div>
      </nav>
    </>
  );
};

export default MobileMenu;
