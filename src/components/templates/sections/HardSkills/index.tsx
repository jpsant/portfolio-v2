import { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import Carousel from 'react-material-ui-carousel';
import Container from '@material-ui/core/Container';

import SkillsStar from '~assets/3D-assets/skills-star.png';
import HardSkillsCards from '~molecules/HardSkillsCards';
import { ThemeContext } from '~contexts/themeContext';

// eslint-disable-next-line css-modules/no-unused-class
import styles from './styles.module.scss';
import reactImg from '~assets/svg/reactImg.svg';
import reduxImg from '~assets/svg/reduxImg.svg';
import nextImg from '~assets/svg/nextImg.svg';
import LightRightArrow from '~assets/svg/light-right-arrow.svg';
import LightLefttArrow from '~assets/svg/light-left-arrow.svg';
import DarkRightArrow from '~assets/svg/dark-right-arrow.svg';
import DarkLefttArrow from '~assets/svg/dark-left-arrow.svg';

const HardSkillsSection = () => {
  const { t } = useTranslation('HardSkills');
  const { theme } = useContext(ThemeContext);

  const skillCards = [
    {
      skillName: t('skill-name-1'),
      skillImg: reactImg,
      skillTitle: t('skill-title-1'),
      skillDescription: t('skill-description-1')
    },
    {
      skillName: t('skill-name-2'),
      skillImg: reduxImg,
      skillTitle: t('skill-title-2'),
      skillDescription: t('skill-description-2'),
      reverse: true
    },
    {
      skillName: t('skill-name-3'),
      skillImg: nextImg,
      skillTitle: t('skill-title-3'),
      skillDescription: t('skill-description-3')
    }
  ];

  return (
    <section className={styles.hardSkillsSection}>
      <Container maxWidth="lg">
        <div className={styles.hardSkillsSection__container}>
          <div className={styles.hardSkillsSection__container__title}>
            <img src={SkillsStar} alt="hard skills image" />
            <h1>{t('title')}</h1>
          </div>
          <div className={styles.hardSkillsSection__container__cards}>
            {skillCards.map((skill) => (
              <HardSkillsCards key={skill.skillName} {...skill} />
            ))}
          </div>
          <div className={styles.hardSkillsSection__container__carousel}>
            <Carousel
              animation="slide"
              autoPlay={false}
              navButtonsAlwaysVisible={true}
              fullHeightHover={false}
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
              {skillCards.map((skill) => (
                <HardSkillsCards key={skill.skillName} {...skill} />
              ))}
            </Carousel>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default HardSkillsSection;
