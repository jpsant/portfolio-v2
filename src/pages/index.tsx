import { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { CSSTransition, SwitchTransition } from 'react-transition-group';

import MobileMenu from '~organisms/MobileMenu';
import LoadingSpinner from '~atoms/LoadingSpinner';
import { ThemeContext } from '~contexts/themeContext';
import HomeSection from '~templates/sections/Home';
import AboutSection from '~templates/sections/About';
import SoftSkillsSection from '~templates/sections/SoftSkills';

const App = () => {
  const { theme } = useContext(ThemeContext);
  const { ready } = useTranslation('SoonTemplate');

  return (
    <body className={theme}>
      <SwitchTransition>
        <CSSTransition key={ready ? 0 : 1} timeout={1100} classNames="translate">
          {ready ? (
            <section>
              <MobileMenu />
              <HomeSection />
              <AboutSection />
              <SoftSkillsSection />
            </section>
          ) : (
            <LoadingSpinner loading={ready} />
          )}
        </CSSTransition>
      </SwitchTransition>
    </body>
  );
};

export default App;
