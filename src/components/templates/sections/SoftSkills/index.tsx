import { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import Carousel from 'react-material-ui-carousel';
import Container from '@material-ui/core/Container';

// eslint-disable-next-line css-modules/no-unused-class
import styles from './styles.module.scss';
import { ThemeContext } from '~contexts/themeContext';
import SoftSkillsCards from '~molecules/SoftSkillsCards';
import ProfileImage from '~assets/3D-assets/profile.png';
import Skill1 from '~assets/svg/soft-1.svg';
import Skill2 from '~assets/svg/soft-2.svg';
import Skill3 from '~assets/svg/soft-3.svg';
import LightRightArrow from '~assets/svg/light-right-arrow.svg';
import LightLefttArrow from '~assets/svg/light-left-arrow.svg';
import DarkRightArrow from '~assets/svg/dark-right-arrow.svg';
import DarkLefttArrow from '~assets/svg/dark-left-arrow.svg';

const SoftSkillsSection = () => {
  const { t } = useTranslation('SoftSkills');
  const { theme } = useContext(ThemeContext);
  const skills = [
    { image: Skill1, alt: 'Soft skill 1', title: t('skill-title-1'), description: t('skill-description-1') },
    { image: Skill2, alt: 'Soft skill 2', title: t('skill-title-2'), description: t('skill-description-2') },
    { image: Skill3, alt: 'Soft skill 3', title: t('skill-title-3'), description: t('skill-description-3') }
  ];

  return (
    <section className={styles.softSkillsSection}>
      <Container maxWidth="lg">
        <div className={styles.softSkillsSection__container}>
          <div className={styles.softSkillsSection__container__title}>
            <img src={ProfileImage} alt="soft skills image" />
            <h1>{t('title')}</h1>
          </div>
          <div className={styles.softSkillsSection__container__cards}>
            {skills.map((skill) => (
              <SoftSkillsCards key={skill.alt} {...skill} />
            ))}
          </div>
          <div className={styles.softSkillsSection__container__carousel}>
            <Carousel
              animation="slide"
              swipe={true}
              autoPlay={false}
              navButtonsAlwaysVisible={false}
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
              {skills.map((skill) => (
                <SoftSkillsCards key={skill.alt} {...skill} />
              ))}
            </Carousel>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default SoftSkillsSection;
