import { useContext } from 'react';

import { ThemeContext } from '~contexts/themeContext';
import SoonTemplate from '~templates/SoonTemplate';

const App = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <body className={theme}>
      <SoonTemplate />
    </body>
  );
};

export default App;
