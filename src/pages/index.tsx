import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { CSSTransition, SwitchTransition } from 'react-transition-group';

import MobileMenu from '~organisms/MobileMenu';
import LoadingSpinner from '~atoms/LoadingSpinner';
import HomeSection from '~templates/sections/Home';
import AboutSection from '~templates/sections/About';
import SoftSkillsSection from '~templates/sections/SoftSkills';
import HardSkillsSection from '~templates/sections/HardSkills';
import ProjectsSection from '~templates/sections/Projects';
import ContactSection from '~templates/sections/Contact';

const App = () => {
  const { ready } = useTranslation('SoonTemplate');

  useEffect(() => {
    document.body.className = 'dark';
  });

  return (
    <>
      <SwitchTransition>
        <CSSTransition key={ready ? 0 : 1} timeout={1100} classNames="translate">
          {ready ? (
            <section>
              <MobileMenu />
              <HomeSection />
              <AboutSection />
              <SoftSkillsSection />
              <HardSkillsSection />
              <ProjectsSection />
              <ContactSection />
            </section>
          ) : (
            <LoadingSpinner loading={ready} />
          )}
        </CSSTransition>
      </SwitchTransition>
    </>
  );
};

export default App;
