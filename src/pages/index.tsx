import { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { CSSTransition, SwitchTransition } from 'react-transition-group';

import MobileMenu from '~organisms/MobileMenu';
import LoadingSpinner from '~atoms/LoadingSpinner';
import { ThemeContext } from '~contexts/themeContext';
import HomeTemplate from '~templates/sections/Home';

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
              <HomeTemplate />
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
