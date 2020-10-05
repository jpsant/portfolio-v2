import { useTranslation } from 'react-i18next';
import { Container } from '@material-ui/core';
import Boxes from '~assets/svg/boxes.svg';
import './styles.scss';

const App = () => {
  const { t } = useTranslation('Home');

  return (
    <>
      <Container maxWidth="lg">
        <div className="soonContainer">
          <h1 className="soonContainer-h1">{t('UserName')}</h1>
          <h2 className="soonContainer-h2">{t('UserJob')}</h2>
          <h3 className="soonContainer-h3">{t('UserSoon')}</h3>
        </div>
      </Container>
      <img className="box1" src={Boxes} alt="Box 1" />
      <img className="box2" src={Boxes} alt="Box 2" />
    </>
  );
};

export default App;
