import { withTranslation } from '~src/i18n';

type Props = {
  t: CallableFunction;
};

const App = ({ t }: Props) => {
  return (
    <div>
      <h1>{t('HomeTitle')}</h1>
    </div>
  );
};

export default withTranslation('Home')(App);
