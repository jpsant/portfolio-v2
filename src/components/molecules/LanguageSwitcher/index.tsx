import { useTranslation } from 'react-i18next';
import Brazil from '~assets/svg/brazil.svg';
import USA from '~assets/svg/usa.svg';

import styles from './styles.module.scss';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  return (
    <div className={styles.languageSwitcher}>
      {i18n.language === 'en-US' ? (
        <button
          className={styles.languageSwitcher__languageButton_selected}
          onClick={() => i18n.changeLanguage('en-US')}
        >
          <img src={USA} alt="USA selected Flag SVG" />
        </button>
      ) : (
        <button
          className={styles.languageSwitcher__languageButton_selected}
          onClick={() => i18n.changeLanguage('pt-BR')}
        >
          <img src={Brazil} alt="Brazil selected Flag SVG" />
        </button>
      )}
      <div className={styles.languageSwitcher__languageContainer}>
        {i18n.language === 'pt-BR' ? (
          <button className={styles.languageSwitcher__languageButton} onClick={() => i18n.changeLanguage('en-US')}>
            <img src={USA} alt="USA Flag SVG" />
          </button>
        ) : (
          <button className={styles.languageSwitcher__languageButton} onClick={() => i18n.changeLanguage('pt-BR')}>
            <img src={Brazil} alt="Brazil Flag SVG" />
          </button>
        )}
      </div>
    </div>
  );
};

export default LanguageSwitcher;
