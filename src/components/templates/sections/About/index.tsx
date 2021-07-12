import { useState, useContext } from 'react';
import { useTranslation } from 'react-i18next';
import Carousel from 'react-material-ui-carousel';
import Container from '@material-ui/core/Container';

// eslint-disable-next-line css-modules/no-unused-class
import styles from './styles.module.scss';
import { ThemeContext } from '~contexts/themeContext';
import Imac from '~assets/3D-assets/imac.png';
import Ipad from '~assets/3D-assets/ipad.png';
import Speaker from '~assets/3D-assets/speaker.png';
import LightRightArrow from '~assets/svg/light-right-arrow.svg';
import LightLefttArrow from '~assets/svg/light-left-arrow.svg';
import DarkRightArrow from '~assets/svg/dark-right-arrow.svg';
import DarkLefttArrow from '~assets/svg/dark-left-arrow.svg';

const AboutSection = () => {
  const { t } = useTranslation('AboutSection');
  const [currentImage, setCurrentImage] = useState(0);
  const { theme } = useContext(ThemeContext);

  const images = [
    { src: Imac, alt: 'imac img' },
    { src: Ipad, alt: 'ipad img' },
    { src: Speaker, alt: 'speaker img' }
  ];

  return (
    <section className={styles.aboutSection}>
      <Container maxWidth="lg">
        <div className={styles.aboutSection__container}>
          <div className={styles.aboutSection__container__carousel}>
            <h1>{t(`title-${JSON.stringify(currentImage)}`)}</h1>
            <Carousel
              swipe={true}
              autoPlay={false}
              navButtonsAlwaysVisible={false}
              onChange={(index) => setCurrentImage(index)}
              NextIcon={
                <img
                  src={theme === 'dark' ? DarkRightArrow : LightRightArrow}
                  alt={theme === 'dark' ? 'dark next arrow' : 'light next arrow'}
                />
              }
              PrevIcon={
                <img
                  src={theme === 'dark' ? DarkLefttArrow : LightLefttArrow}
                  alt={theme === 'dark' ? 'dark prev arrow' : 'light prev arrow'}
                />
              }
            >
              {images.map((img) => {
                return (
                  <img
                    className={styles.aboutSection__container__carousel_image}
                    key={img.alt}
                    src={img.src}
                    alt={img.alt}
                  />
                );
              })}
            </Carousel>
          </div>
          <div className={styles.aboutSection__container__texts}>
            <h1>{t(`title-${JSON.stringify(currentImage)}`)}</h1>
            <h2>{t(`description-${JSON.stringify(currentImage)}`)}</h2>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default AboutSection;
